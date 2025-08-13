import { Component, input, output } from '@angular/core';
import { User } from '../interface/user';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  occupation = input<string>();
  user!: User;
  addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
