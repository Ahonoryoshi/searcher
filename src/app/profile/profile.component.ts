import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../user';
import { GitfetchService } from '../services/gitfetch.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user:any;
  username:any = 'hello';
  submitUser:any;

 






  constructor( private gitfetchService:GitfetchService) { 
    this.user = this.gitfetchService.gitFetch()
    this.gitfetchService = this.gitfetchService;
  }

  ngOnInit(): void {

    this.gitfetchService.gitFetch()
    this.user = this.gitfetchService.user

    

    


  }

}
