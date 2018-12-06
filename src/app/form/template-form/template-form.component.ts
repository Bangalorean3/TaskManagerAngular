import { Component, OnInit } from '@angular/core';
import { RestApiUsersServiceService } from 'src/app/services/rest-api-users-service.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  myForm:any
  constructor(private userService:RestApiUsersServiceService) { }

  ngOnInit() {
  }

  addFormUser(myForm) {
    console.log(myForm)
    this.userService.createUser(myForm).subscribe(response => console.log(response))
  }
}
