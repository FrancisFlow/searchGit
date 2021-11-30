import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { GitServiceService } from '../git-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private gitService:GitServiceService) { }

  user: User;
  userName: string;

  // function to fetch 

  searchForUser()
  {
    this.user = this.gitService.user
    this.gitService.getUserData(this.userName);

  }

  ngOnInit(): void {
  }

}
