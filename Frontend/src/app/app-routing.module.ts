import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';

const routes: Routes = [ 
  {path: '', component: IndexComponent},
{ path: "skills", component: UserprofileComponent},

];
const routerOptions: ExtraOptions = {
onSameUrlNavigation: 'reload'
};

@NgModule({

declarations: [],
imports: [
  RouterModule.forRoot(routes, routerOptions)
],
exports: [
  RouterModule
],

})
export class AppRoutingModule { }
