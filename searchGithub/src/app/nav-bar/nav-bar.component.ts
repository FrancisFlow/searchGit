import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { GitServiceService } from '../git-service.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private gitService:GitServiceService) { }

  user: User;
  userName: string;
  repos:Repository[];

  // function to fetch user data

  searchForUser()
  {
    this.user = this.gitService.user
    this.gitService.getUserData(this.userName);
    this.repos= this.gitService.repos
    this.gitService.getUserData(this.userName)

  }



  ngOnInit() {
  }

}
