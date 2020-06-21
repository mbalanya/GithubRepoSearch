import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class GithubService {

  private username = 'mbalanya';
  private client_id = 'a816b02129d1ad62c2bb';
  private client_secret = '3a665e0224f6bab79c5107d6e49236e155c478fb';

  constructor(private _http:HttpClient) {
    console.log('Github Service init....!');

  }

  getUser(){
    return this._http.get('https://api.github.com/users/' + this.username)
      //.pipe(map((response: any) => response.json()));
      .pipe(map(res => res ));
  }

  getRepos(){
    return this._http.get('https://api.github.com/users/' + this.username + '/repos')
      //.pipe(map((response: any) => response.json()));
      .pipe(map(res => res ));
  }

}
