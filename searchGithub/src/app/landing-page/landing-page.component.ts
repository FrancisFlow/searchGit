import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';
import { User } from '../user'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  user: User;

  constructor(private gitService:GitServiceService) { 


  }

  ngOnInit(){
    this.gitService.getUserData("FrancisFlow");
    this.user= this.gitService.user;
  }


}
