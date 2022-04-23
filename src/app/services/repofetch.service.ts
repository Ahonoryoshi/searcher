import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../repo';

@Injectable({
  providedIn: 'root'
})
export class RepofetchService {
  //username:string = 'Hello'
  hello:any;
  repos:any;
  myrepos:any[] = [];

  usernames:any[] = [];

  repo:Repo = new Repo('','',new Date(),'');
  repoUrl:string =`https://api.github.com/users/`

  constructor(private http:HttpClient) {

  }
  fetchRepo(username:any){

    interface ApiResponse{
      repos:Repo[];
      

      name:any;
      bio:any;
      created_at:any;
      html_url:any;
      repo:any;

    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(this.repoUrl +`${username}/repos`).toPromise().then(response=>{
        this.repo.name = response?.name
        this.repo.bio = response?.bio
        this.repo.created_at = response?.created_at
        this.repo.html_url = response?.html_url

        this.hello = response
        this.myrepos = []

        

        //console.log(this.repo);
        console.log(this.hello[1].name);

        this.hello.forEach((x:Repo) => {
          console.log(x.name)
          this.myrepos.push(x)
          
        });
        resolve(response)
      },
      error=>{
        this.repo.name = "yes"
        this.repo.bio = "yes"

        reject(error)
      })
    })
    return promise

  }
}
