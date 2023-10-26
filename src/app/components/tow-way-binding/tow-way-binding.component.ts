import { Component } from '@angular/core';

@Component({
  selector: 'app-tow-way-binding',
  templateUrl: './tow-way-binding.component.html',
  styleUrls: ['./tow-way-binding.component.css']
})
export class TowWayBindingComponent {

  innerMsg:string = '';

  //target -> element which event happen on it
  storeMsg(e :any){
  this.innerMsg  = e.target.value;
  }


  images:string[]=[
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg'
  ]
  counter :number = 0;
  currentImage:string = this.images[this.counter];

  NextImg(){
    this.counter ++;
    if(this.counter >= this.images.length)
        this.counter = 0;
        this.currentImage = this.images[this.counter];  
  }

  Pervise(){
    this.counter -- ;
    if(this.counter < 0)
      this.counter = this.images.length-1;
      this.currentImage = this.images[this.counter]; 
  }

  intervalId : any;

  Start(){
    this.intervalId = setInterval(() => this.NextImg(), 1000);
  }

  stop(){
    clearInterval(this.intervalId);
  }

formName:string ='';
formAddress:string ='';
formAge:number = 0;

PrintFormData(){
console.log(this.formName,this.formAddress,this.formAge);
this.formName= this.formAddress = '';
this.formAge=0;
}

task:string = '';
Alltasks:string[]=[] ;

AddToDoList(){
  if(this.task){
    this.Alltasks.push(this.task);
    this.task = '';
  }

}

DeleteTask(index: number){
  this.Alltasks.splice(index, 1);
}

}
