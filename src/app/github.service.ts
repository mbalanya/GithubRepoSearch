import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
});

export class GithubService {

  

  constructor(private _http:HttpClient) {
    console.log('Github Service init....!');

  }

  getUser(){
    return this._http.get('https://api.github.com/users/' + this.username)
      //.pipe(map((response: any) => response.json()));
      .pipe(map(res => res ));
  }

}
