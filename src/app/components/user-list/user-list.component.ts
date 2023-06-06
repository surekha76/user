import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild('myModalClose') modalclose;
  @ViewChild('userForm') myForm: NgForm;
  @ViewChild('userModal') modal :any;
  users : object;
  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'status', 'edit', 'delete'];
  public user = {id:'', name:'',email:'',gender:'',status:''};
  public user$ = of(this.user);
  edit:boolean = false;

  constructor(private apiService:ApiCallService) { }

  ngOnInit() {
    this.apiService.getUserList().subscribe(response => {
      console.log(response);
      this.users = response;
    }, error => {
      this.apiService.showError('Error occured');
      console.error(error);
    });    
  }
  editUser(user){
    this.edit = true;
    this.user = {id: user.id,name: user.name, email: user.email, gender: user.gender,status: user.status};
    this.user$ = of(this.user);
  }
  onsubmit(){
    this.user$
    .pipe(
      filter(data => {
        const errors = [];
        if (!data.name) {
          this.apiService.showError('Name is required');
        }else if (!data.email) {
          this.apiService.showError('Email is required');
        }else if (!data.gender) {
          this.apiService.showError('Gender is required');
        }else if (!data.status) {
          this.apiService.showError('Status is required');
        }else {
          return true;
        }
      })
    )
  .subscribe(() => {
    if (!this.edit){
      this.apiService.addUser(this.user).subscribe(response => { 
        this.apiService.showSuccess('User created successfully');
        this.modalclose.nativeElement.click(); //close the popup
        this.myForm.resetForm(); //reset the form
        this.ngOnInit(); //update the table
      }, error => {
        this.apiService.showError(error.error[0].field+' '+error.error[0].message);
      });
    }else if (this.edit){
      this.apiService.editUser(this.user).subscribe(response => {
        // Handle the response received from the API
        this.apiService.showSuccess('User updated successfully');
        console.log(response);
        this.edit = false;
        this.modalclose.nativeElement.click(); //close the popup
        this.myForm.resetForm(); //reset the form
        this.ngOnInit(); //update the table
      }, error => {
        this.apiService.showError('Error Occured');
        console.error(error);
      });  
    }
  });
  }
  close(){
    this.myForm.resetForm(); //reset the form
  }
  deleteUser(userId){
    this.apiService.deleteUser(userId).subscribe(response => {
      this.apiService.showSuccess('User deleted successfully');
      this.ngOnInit();
    }, error => {
      this.apiService.showError(error.error.message);
      console.error(error);
    });    
  }
}
