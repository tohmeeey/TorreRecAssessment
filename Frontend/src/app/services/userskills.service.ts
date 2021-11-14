import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserskillsService {
  readonly rootURL = environment.APIURL;
  req_headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.req_headers = new HttpHeaders({ "content-type": "application/json", "accept": "application/json", "skip_error_handler_interceptor": "false" });
  }

  getUserprofile(username: string): Observable<any> {
    debugger
    return this.http.get(this.rootURL + "userprofile/getprofiledetails?username=" + username);
  }
}
