import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { UserskillsService } from 'src/app/services/userskills.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  profile: any;
  default: boolean = true
  masterskills:any[]=[];
  proficientskills:any[]=[];
  expertskills:any[]=[];
 noviceskills:any[]=[];
 noexperienceinterestedskills:any[]=[];
 loading:boolean;
  constructor(public userservice: UserskillsService, public activatedroute: ActivatedRoute, public toastr: ToasterService) { }

  async ngOnInit() {

    //await this.getuserprofile();

  }

  async getuserprofile(username: string) {
    this.default = false
    this.loading=true;
    // this.username = this.activatedroute.snapshot.queryParams.username;
    if (!username) {
      this.toastr.pop('error', "Error", "Please specify username");
      this.default = true;
      return;
    }
    this.profile = await this.userservice.getUserprofile(username).toPromise().catch(() => { this.toastr.pop('error', "Error", "Error retrieving user profile"); this.default = true; return; }).finally(()=>this.loading=false);
    this.masterskills = this.profile.strengths.filter(function (strength) { return strength.proficiency=="master" });
    this.noviceskills = this.profile.strengths.filter(function (strength) { return strength.proficiency=="novice" });
    this.expertskills = this.profile.strengths.filter(function (strength) { return strength.proficiency=="expert" });
    this.proficientskills = this.profile.strengths.filter(function (strength) { return strength.proficiency=="proficient" });
    this.noexperienceinterestedskills = this.profile.strengths.filter(function (strength) { return strength.proficiency=="no-experience-interested" });
    debugger
  }
}

