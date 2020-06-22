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
  username:string;

  constructor(private _githubService:GithubService) {
    console.log('github component init...');

    this._githubService.getUser2().subscribe(user => {
      //console.log(user);
      this.user = 'user';
    });
   }

   search(){
     this._githubService.updateUser(this.username)

     this._githubService.getUser().subscribe(user => {
       //console.log(user);
       this.user = 'user';
     });

     this._githubService.getRepos().subscribe(repos => {
       this.repos = repos;
     });
   }


  ngOnInit(): void {
  }

}
