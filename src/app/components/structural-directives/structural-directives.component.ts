import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {

  show:boolean = true;
  ready:boolean = true;
  products : {type:string}[] = [{type:"bus"},{type:"car"},{type:"motor"}];
  color:string ='red';
}
