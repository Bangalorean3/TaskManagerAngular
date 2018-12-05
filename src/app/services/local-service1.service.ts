import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService1Service {

  MessageInServiceToBeSent ="hurray"
friends = ["ola","uber","zap"]
  
  sayHelloService1(){
      console.log("serviec 1 called");

  }
  constructor() { }
}
