import { Component, OnInit } from '@angular/core';
import { RestApiUsersServiceService } from 'src/app/services/rest-api-users-service.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-users-apicomponent',
  templateUrl: './users-apicomponent.component.html',
  styleUrls: ['./users-apicomponent.component.css']
})
export class UsersAPIComponentComponent implements OnInit {

    allUsers:any
  constructor(private userService:RestApiUsersServiceService, private router:Router) { }

  ngOnInit() {

    this.getAPIData()
  }


  getAPIData(){
      this.userService.getRemoteUsers().subscribe((data) => {
        console.log(data)
        this.allUsers = data
        console.log(this.allUsers)
      })

  }

  user={
    "name" : "QWERTY",
    "email" : "qwerty@abc.com",
    "address":{
      "geo":{
        "lat":"12.12","lng":"34.34"
      }
    }

  }

  createUserNew (){
    this.userService.createUser(this.user).subscribe((response)=>
    {
      //console.log(response);
      this.userService.getRemoteUsers().subscribe((data) => 
      {
        console.log(data)
        this.allUsers = data
        console.log(this.allUsers)
      })
    })
  }
    

  deleteUser(id){
    this.userService.deleteUserData(id).subscribe((response)=>
    {
      //console.log(response);
      this.userService.getRemoteUsers().subscribe((data) => 
      {
        console.log(data)
        this.allUsers = data
        console.log(this.allUsers)
      })
    })
  }

  viewDetail(id){
    console.log(id)
    this.router.navigate(["/remoteData",id]) //navigation to /remoteData/(id)
  }
}
