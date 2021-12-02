import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../repository';
import { GitServiceService } from '../git-service.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  @Input() repo:Repository;

  constructor() { 


  }

  ngOnInit(){
  }

}
