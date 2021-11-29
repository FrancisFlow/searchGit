import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  user: User;


  getUserData(userName:string){
    interface userApiResponse{
      followers:string;
      following:string;
      login: string;
      avatar_url:string;
    }
    let promise = new Promise<void>((resolve, reject)=>{
      this.http.get<userApiResponse>(`https://api.github.com/users/${userName}`).toPromise().then(response=>{
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.avatar_url= response.avatar_url;
        this.user.login = response.login;

        resolve()
      },
      error=>{
        this.user.login='User not found'
        console.log("Something went wrong")
        reject(error)
      })

    })
    return promise;
  }

 

  constructor(private http:HttpClient) { 
    this.user = new User( "", "", "", "");
  }
}
