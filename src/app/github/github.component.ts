import { Component, OnInit } from '@angular/core';
import { GithubService } from "../github.service";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]
})

export class GithubComponent implements OnInit {

  user:any;
  repos:any;

  constructor(private _githubService:GithubService) {
    console.log('github component init...');

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
