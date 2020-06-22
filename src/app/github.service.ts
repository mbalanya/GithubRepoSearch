import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class GithubService {

  private username = 'mbalanya';
  private client_id = '8459a4d7eac2582d7288';
  private client_secret = '87c39eaab1fcbf7c088bfcd413269992b4d2f405';

  constructor(private _http:HttpClient) {

  }

  getUser(){
    return this._http.get('https://api.github.com/users/' + this.username)
      .pipe(map(res => res ));
  }

  getRepos(){
    return this._http.get('https://api.github.com/users/' + this.username + '/repos')
      .pipe(map(res => res ));
  }

  updateUser(username:string){
    this.username = username;
  }
}
