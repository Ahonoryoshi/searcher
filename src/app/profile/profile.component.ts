import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user:any;
  username:any = 'hello';

  submitUser(){

    
    
  }






  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    interface ApiResponse{
      login:string;
      avatar_url:string;
      url:string;
      id:number;
      public_repos:number;
    }
    this.http.get<ApiResponse>(`https://api.github.com/users/${this.username}`).subscribe(data=>{
      this.user = new User(data.login,
        data.avatar_url,
        data.url,
        data.id,
        data.public_repos)
    })
  }

}
