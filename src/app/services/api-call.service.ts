import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient, private toastr:ToastrService) { }

  public getUserList() {
    console.log('service');
    const url = 'https://gorest.co.in/public/v2/users';
    const headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer 0cdfb81e29ef3504afe8ba0aae9b6e151836edca640fad7d75cbe2b7eb8bd911');

    return this.http.get(url, { headers });
  }
  public addUser(user) {
    console.log('service user');
    console.log(user);
    const url = 'https://gorest.co.in/public/v2/users';
    const body = {
      name: user.name,
      gender: user.gender,
      email: user.email,
      status: user.status
    };
    const headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer 0cdfb81e29ef3504afe8ba0aae9b6e151836edca640fad7d75cbe2b7eb8bd911');

    return this.http.post(url, body, { headers });
  }
  public deleteUser(userId){
    const url = 'https://gorest.co.in/public/v2/users/'+userId;
    const headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer 0cdfb81e29ef3504afe8ba0aae9b6e151836edca640fad7d75cbe2b7eb8bd911');
    return this.http.delete(url, { headers });
  }
  showSuccess(message: string) {
    this.toastr.success(message, 'Success');
  }

  showError(message: string) {
    this.toastr.error(message, 'Error');
  }
  public editUser(user){
    const url = 'https://gorest.co.in/public/v2/users/'+user.id;
    const body = {
      name: user.name,
      gender: user.gender,
      email: user.email,
      status: user.status
    };
    const headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer 0cdfb81e29ef3504afe8ba0aae9b6e151836edca640fad7d75cbe2b7eb8bd911');

    return this.http.patch(url, body, { headers });
  }
}
