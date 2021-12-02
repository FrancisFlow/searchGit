import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';
import { User } from '../user'
import { Repository } from '../repository';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  user: User;
  repos: Repository[];

  userNotFound(){
    return "User not found"
  }

  constructor(private gitService:GitServiceService) { 


  }


  // toggle repo function


  // showRepos:boolean = false;

  // toggleRepos(){
  //   this.showRepos = !this.showRepos;
  // }

  ngOnInit(){
    this.gitService.getUserData("FrancisFlow");
    this.user= this.gitService.user;

    this.gitService.getRepositoryData("FrancisFlow")
    this.repos= this.gitService.repos;

  }



}
