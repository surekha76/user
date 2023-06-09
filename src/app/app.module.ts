import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { DxPivotGridModule, DxChartModule, DxTabPanelModule, DxButtonModule  } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevexComponent } from './components/devex/devex.component';
import { TabsComponent } from './components/tabs/tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    DevexComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    DxPivotGridModule,
    DxChartModule,
    DxTabPanelModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
