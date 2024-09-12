import { Component, Input, input } from '@angular/core';
import { dummy_user } from '../app/dummy-user';

const randomIndex = Math.floor(Math.random() * dummy_user.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input({required : true})name !: string;
 @Input({required : true})id !: string;
 @Input({required : true})avatar !: string;

//  name= input.required<string>();
  // onSelectUser(){
  // //   console.log("User has clicked");
  // // //  const randomIndex = Math.floor(Math.random() * dummy_user.length)
  //   this.selectedUser = dummy_user[randomIndex]
  // }

  selectedUser = dummy_user[randomIndex];

  get imagePath(){
    return 'user/' + this.avatar;

  }
}
