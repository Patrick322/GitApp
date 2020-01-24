import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GitapiService {

  private username:string;
  private clientid = '633e1312f370b35347fa5';
  private clientsecret = 'dd6a03966ebd59185df37827e44c624838200d4d';
  constructor(private http:HttpClient) {
   console.log("service is now ready!"); 
   this.username = 'Patrick322'
   }
   getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res); 
   }
getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .map(res => res); 
}

updateProfile(username:string){
this.username = username;
}

}
