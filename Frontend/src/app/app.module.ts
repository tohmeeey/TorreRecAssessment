import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserskillsComponent } from './components/userskills/userskills.component';
import { SkillComponent } from './components/skill/skill.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { AlertsInterceptor } from './interceptors/alerts.interceptor';
import {ToasterModule} from 'angular2-toaster';
import { IndexComponent } from './components/index/index.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserskillsComponent,
    SkillComponent,
    UserprofileComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToasterModule.forRoot()
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AlertsInterceptor,
      multi: true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
