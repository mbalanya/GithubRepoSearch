import { Component, OnInit } from '@angular/core';
import { GithubService } from "../github.service";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]
})

export class GithubComponent implements OnInit {

  user:any;
  repos:any;
  username:string;

  constructor(private _githubService:GithubService) {
    
   }

   search(){
     this._githubService.updateUser(this.username)

     this._githubService.getUser().subscribe(user => {
       this.user = user;
     });

     this._githubService.getRepos().subscribe(repos => {
       this.repos = repos;
     });
   }

  ngOnInit(): void {
  }

}
