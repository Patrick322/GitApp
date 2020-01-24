import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { GitapiService } from '../gitapi.service'
@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
searchTerm :string;
@Output()  searchEmitter = new EventEmitter<any>();
  profile:any
  repos:any;
  username:string
  constructor(private profileService: GitapiService) { 
    this.profileService.getProfileInfo().subscribe(profile => {
      profile;
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    });
  }
emitUser() {
  this.searchEmitter.emit(this.searchTerm);
}
  findProfile(){
    this.profileService.updateProfile(this.username)
    this.profileService.getProfileInfo().subscribe(profile => {
      profile;
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {
  }

}