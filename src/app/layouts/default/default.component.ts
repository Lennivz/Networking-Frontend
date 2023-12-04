import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {


  routes: any[] = [
    { label: 'Home', path: '/home' },
    { label: 'Courses', path: '/courses'},
    { label: 'Chat Room', path: '/chat-room'},
    { label: 'Contacts', path: '/contacts'},
  ]



}
