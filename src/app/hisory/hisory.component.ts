import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hisory',
  templateUrl: './hisory.component.html',
  styleUrls: ['./hisory.component.css']
})
export class HisoryComponent implements OnInit {

  usernames:any[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
