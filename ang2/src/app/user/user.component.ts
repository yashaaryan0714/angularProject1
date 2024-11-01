import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';
import { CardComponent } from "../shared/card/card.component";
const random_Index = Math.floor(Math.random() * DUMMY_USERS.length);

type User ={
  id: string
  name: string
  avatar: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  // @Input({required: true}) id !: string;
  // @Input({required: true}) avatar !: string;
  // @Input({required: true}) name !: string;
  // id = input.required<string>();
  // name = input.required<string>();
  // avatar = input.required<string>();

  // @Input({required: true}) user !: {
  //   id: string
  //   name: string
  //   avatar: string
  // }
  
  @Input({required: true}) selected!: boolean;
  @Input({required: true}) user !: User
  @Output() select = new EventEmitter<string>()
  // select = output<string>()
  onSelectUser() {
    console.log("The user click the button");
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.user.id);
  }

  // selectedUser = signal (DUMMY_USERS[random_Index]);

  imagePath = computed(()=>'/users/' + this.user.avatar);

  // get imagePath(){
  //   return '/users/' + this.avatar();
  // }
}
