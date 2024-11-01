import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../dummy-user';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  // template: 'Hello, {{title}}',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Satyajyoti';
  users = DUMMY_USERS;
  // selectedUser = {name:''};


  selectedUserId ?: string;
  get selectedUser(){
    return this.users.find((user)=> user.id == this.selectedUserId);
  }


  
  onSelectUser(id: string){
    console.log('Selected user is '+ id);
    this.selectedUserId = id;
    // for(let user of this.users){
    //   if(user.id == id)
    //     this.selectedUser = user
    // }
  }
}
