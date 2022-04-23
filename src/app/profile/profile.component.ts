import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../user';
import { GitfetchService } from '../services/gitfetch.service';
import { RepofetchService } from '../services/repofetch.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user:any;
  hello:any;
  username:any;
  submitUser:any;
  repo:any;
  myrepos:any;
  usernames:any[]= [];
  showProfile:boolean = false;
  showRepos:boolean = false;



  toggledetails(){
    const x = document.getElementById('username');
    const y = document.getElementById('reposits');

    





    

    this.showProfile =! this.showProfile
    if (this.showProfile===true){
      alert("Click 'Enter' then Scroll down to see the user profile")


    }
    
  }
  togglerepos(){

    this.showRepos =! this.showRepos;
    if (this.showRepos===true){
      alert(" Click 'Enter' then Scroll down to see the repositories")


    }
    
  }

  /*reset(usernameForm:NgForm){
    const newUser:User = Object.assign({}, this.user);
    this.gitfetchService.gitFetch(newUser);
    usernameForm.reset();

  }*/

 






  constructor( private gitfetchService:GitfetchService, private repofetchService:RepofetchService) { 
    this.user = this.gitfetchService.gitFetch(this.username)
    this.gitfetchService = this.gitfetchService;
    

    this.repo = this.repofetchService.fetchRepo(this.username)
    this.hello= this.repofetchService.fetchRepo(this.username)
    this.myrepos = this.repofetchService.fetchRepo(this.username)
    this.repofetchService = repofetchService;
  }

  ngOnInit(): void {

    //this.showProfile =! this.showProfile;
    //this.showRepos =! this.showRepos;

    this.hello = [];
    this.usernames.push(this.username)
    


    this.gitfetchService.gitFetch(this.username)
    //this.gitfetchService.username = this.username;
    this.user = this.gitfetchService.user


    this.repofetchService.fetchRepo(this.username)
    this.repo = this.repofetchService.repo
    this.hello = this.repofetchService.hello
    this.hello = []
    this.myrepos = this.repofetchService.myrepos
    

    


  }

}
