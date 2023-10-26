import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  printMsg(Uname:string){
    console.log(`Hello ${Uname}`);
  }

  printMsgP(p : any){
    console.log(p);
    p.innerHTML = 'paragraph changed sucssefuly';
  }

  printMsgBtn(x:any){
    //x -> is info about event
    // x.target -> info about sender
    var element = x.target;
    element.innerHTML = 'Im Clicked';
    console.log(x.target);
  }

  //viewchild is Decerator
  //it contain ref in html 
  @ViewChild('divViewChild') dViewChild:any;

  printViewChild(){
    this.dViewChild.nativeElement.innerHTML = 'test';
  }

}
