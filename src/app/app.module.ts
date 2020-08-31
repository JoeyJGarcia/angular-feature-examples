import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudTool } from './crudtool/crudtool.component';
import { TitleCasePipe } from '../shared/title-case.pipe';
import {FontAwesomeIcons } from '../shared/font-awesome-icons/font-awesome-icons.component';
import { CrudtoolCreateComponent } from './crudtool/crudtool-create.component';
import { WelcomeComponent } from "./home/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    CrudTool,
    TitleCasePipe,
    FontAwesomeIcons,
    CrudtoolCreateComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'crudtool', component: CrudTool },
      {path: 'crudtool/:name', component: CrudtoolCreateComponent },
      {path: 'home', component: WelcomeComponent },
      {path: '', component: WelcomeComponent },
      {path: '**', redirectTo: 'home' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
