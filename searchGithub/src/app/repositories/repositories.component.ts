import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  @Input() repos:Repository;

  constructor() { 


  }

  ngOnInit(){
  }

}
