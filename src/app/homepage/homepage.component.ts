import { Component, OnInit } from '@angular/core';
import { GithubService } from "../github.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [GithubService]
})
export class HomepageComponent implements OnInit {
  user:any;
  repos:any;

  constructor(private _githubService:GithubService) {
    console.log('github component init2...');

     this._githubService.getUser().subscribe(user => {
       //console.log(user);
       this.user = user;
     });

     this._githubService.getRepos().subscribe(repos => {
       this.repos = repos;
     });
    }
  ngOnInit(): void {
  }

}
