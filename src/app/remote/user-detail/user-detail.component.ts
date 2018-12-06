import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
//import { getDefaultService } from 'selenium-webdriver/chrome';
import { RestApiUsersServiceService } from 'src/app/services/rest-api-users-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  activePath:any
  selectedUser:any
  constructor(private active:ActivatedRoute, private userService : RestApiUsersServiceService) { }

  ngOnInit() {
    this.activePath = this.active.snapshot.paramMap.get("id")
    console.log(this.activePath)
    this.getUser(this.activePath)
  }

    getUser(id){
      this.userService.getOneUser(id).subscribe((omg) => {
        this.selectedUser = omg
      })
    }
}
