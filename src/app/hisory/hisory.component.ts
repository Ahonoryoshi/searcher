import { Component, OnInit } from '@angular/core';
import { AusersService } from '../services/ausers.service';

@Component({
  selector: 'app-hisory',
  templateUrl: './hisory.component.html',
  styleUrls: ['./hisory.component.css']
})
export class HisoryComponent implements OnInit {

  usernames:any[]=[]

  constructor(ausersService:AusersService) {
    this.usernames = ausersService.getAusers()
   }

  ngOnInit(): void {
  }

}
