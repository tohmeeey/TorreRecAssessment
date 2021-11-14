import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToasterService, ToasterConfig } from 'angular2-toaster';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public toastr: ToasterService) { }


  showHttpError(error: HttpErrorResponse) {
    if (error.status === 0) {
      this.toastr.pop('error', "Error", "Unable to connect to server");
    }
    else if (error.status === 400) {
      console.log(error);
      this.toastr.pop('error', "Error", error.error.message);
    }
    else {
      this.toastr.pop('error', "Error", error.statusText,);
    }
  }
}
