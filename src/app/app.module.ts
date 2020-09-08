import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { CrudtoolModule } from './crudtool/crudtool.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: WelcomeComponent },
      {path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: '**', redirectTo: 'home' },
    ]),
    CrudtoolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
