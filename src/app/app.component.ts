import { Component } from '@angular/core';
import { fa, faker } from '@faker-js/faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Typing';
  // resault=false;
  inputText='';
  randomText=faker.lorem.sentence();
  onChangeInput(value:any){
    this.inputText=value;
// if(this.randomText==value)
// {
//  this.resault=true;
// }
// else{
//   this.resault=false;
// }
  }
  compare(entry :string ,random:string):string{
if(!entry){
  return "pending";
}else if(entry===random){
  return "correct";
}else {
  return "incorrect";
}
  }
}
