import { Component, OnInit } from '@angular/core';
import {trigger,state,transition,style, animate} from '@angular/animations';
import { setClassMetadata } from '@angular/core/src/render3';
//animation happens only when triggered == trigger
//progress in animation from one capture to another e.g., change happening to an image/object ==state change
//transition == slowly becoming big or small
//style == define state with the help of style
//animate == transition from initial state to final state by following certain transition rules 
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
                trigger("growUpAnimation",[state("kid",style({'color':'red',transform:'scale(1)'})),
                                          state("elder",style({'color':'green',transform:'rotate(180deg)'})),
                                          transition('kid <=> elder', animate('300ms ease-in'))
                                           ]
                      )       
             ]
          })
//scale == to scale the size
//rotate ==rotates 

export class AnimationComponent implements OnInit {

  defaultState:String = 'kid'
  constructor() { }

  ngOnInit() {
  }

  animateNow(){
    this.defaultState= this.defaultState =='elder' ? 'kid' : 'elder'
  }
}
