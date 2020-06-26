import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
//import { environment } from "./environments/environment";


@Injectable({
  providedIn: 'root'
})

export class GithubService {

  private username = 'mbalanya';
  private client_id = '';
  private client_secret = '';

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
