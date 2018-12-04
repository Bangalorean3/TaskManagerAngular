import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  counter=0

  myTasks= ['Get a drink', 'Plan the weekend','Relax','Go on a drive','Get on a game']
  completedTasks=[]

  constructor() { }

  ngOnInit() {
  }


  sayHello = function(){
    ++this.counter
    console.log("Button clicked:"+this.counter)
    this.myTasks.push(this.oneTask)
    this.oneTask = ""
  }

  taskDone(currentTask){
      console.log("index value:" + currentTask)
      //loc=currentTask
      this.completedTasks.push(this.myTasks[currentTask])
      this.myTasks.splice(currentTask, 1)
      

  }
}
