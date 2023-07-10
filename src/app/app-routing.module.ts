import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { DevexComponent } from './components/devex/devex.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  {path:'', component:TabsComponent},
  {path:'user', component:UserListComponent},
  {path:'devex', component:DevexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
