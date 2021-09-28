import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

  hiddenAtt : boolean = false;

  onClickButton (){
    this.hiddenAtt = !this.hiddenAtt;
    console.log("age : this.user.age");
  }

}
