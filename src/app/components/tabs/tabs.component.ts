// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UserListComponent } from '../../components/user-list/user-list.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit  {
  // @ViewChild('tabContentContainer', { read: ViewContainerRef }) tabContentContainer: ViewContainerRef;

  tabs = [
    { tab_title: 'User Details', component: 'user'  },
    { tab_title: 'ATM Status',  component: 'atm' }
  ];
  
  Companys = [{
    ID: 1,
    CompanyName: 'SuprMart',
    Address: '702 SW 8th Street',
    City: 'Bentonville',
    State: 'Arkansas',
    Zipcode: 72716,
    Phone: '(800) 555-2797',
    Fax: '(800) 555-2171',
    Website: 'http://www.nowebsitesupermart.com',
    component : 'user'
  }, {
    ID: 2,
    CompanyName: "El'Depot",
    Address: '2455 Paces Ferry Road NW',
    City: 'Atlanta',
    State: 'Georgia',
    Zipcode: 30339,
    Phone: '(800) 595-3232',
    Fax: '(800) 595-3231',
    Website: 'http://www.nowebsitedepot.com',
    component : 'devex'
  }];
  
  constructor() { }

  ngOnInit() {
   
  }

}

