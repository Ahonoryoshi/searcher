import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user';
//import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class GitfetchService {
  username:string = 'Hello'
  user:User = new User('','','',0,0);
  apiUrl:string = `https://api.github.com/users/${this.username}`

  
  constructor( private http:HttpClient) {
    this.user = new User('','','',0,0);
   }
   gitFetch(){
     interface ApiResponse {
      login:any;
      avatar_url:any;
      url:any;
      id:any;
      public_repos:any;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(this.apiUrl).toPromise().then(response => {
        this.user.login = response?.login;
        this.user.avatar_url = response?.avatar_url;
        this.user.url = response?.url;
        this.user.id = response?.id;
        this.user.public_repos = response?.public_repos;

        resolve(response)
      },
      error => {
        this.username = "Ahonoryoshi"

        reject(error)

      })
    })
    return promise
    

   }
}
