import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../Environment/Environment';
import { RegisterModel } from '../Model/RegisterModel';
import { Observable } from 'rxjs';
import { LoginModel } from '../Model/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }
RegisterUser(data:RegisterModel):Observable<any>{
 return this.http.post(
      `${environment.apiUrl}/Auth/register`,
      data
    );
  }
LoginUser(data:LoginModel):Observable<any>{
  return this.http.post(
    `${environment.apiUrl}/Auth/login`,
    data
  );
}
getProfile() {
  return this.http.get(
    `${environment.apiUrl}/User/profile`
  );
}
}