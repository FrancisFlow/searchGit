import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Repository } from './repository';
@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  user: User;
  repos:Repository[]=[];




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

// function for getting repository data from api

getRepositoryData(userName:string){

  interface repositoryApiResponse{
      name:string, 
      description:string,
      html_url:string,
      language:string,

  }

  let promise = new Promise<void> ((resolve, reject)=>{
      let repoLength= this.repos.length;
      for (let i=0; i<repoLength; i++){
        this.repos.pop()
      }

      this.http.get<repositoryApiResponse>(`https://api.github.com/users/${userName}repos`).toPromise().then(response=>{
        for (let i=0; i<this.user.public_repos; i++){
          let repo = new Repository("", "", "", "")

          repo.name=response[i]["name"];
          repo.description=response[i]["description"];
          repo.html_url = response[i]["html_url"]
          repo.language = response[i]["language"]

          this.repos.push(repo)
        }
         resolve()
      },
      error=>{
        let repo = new Repository("", "", "", "")
        repo.name = `This repository could not be found`
        console.log("Could not find repo")
        reject(error)
      }
      )
  })
  return promise

}
  

 

  constructor(private http:HttpClient) { 
    this.user = new User( "", "", "", "");
  }
}
