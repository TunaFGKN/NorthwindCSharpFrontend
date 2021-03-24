import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44327/api/auth/"

  constructor(private httpClient:HttpClient) { }

  login(LoginModel:LoginModel){
    return this.httpClient.post(this.apiUrl+"login",LoginModel)
  }

  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true
    }
    else{
      return false
    }
  }
}
