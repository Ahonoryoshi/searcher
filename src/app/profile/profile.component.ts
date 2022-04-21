import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User = new User('','','',0,0)

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    interface ApiResponse{
      login:string;
      avatar_url:string;
      url:string;
      id:number;
      public_repos:number;
    }
  }

}
