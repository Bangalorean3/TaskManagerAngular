import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  counter=0
  salary=8888
  myDate=new Date()
  myString = "custom"
  friends=["A","B","c","D"]
  scores = [110,99,54,65,87,98]
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
