import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  {
    component: DefaultComponent,
    path: '',
    children: [
      {
        component: HomeComponent,
        path: 'home'
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'chat-room',
        component: ChatRoomComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path: '**', // Wildcard route for a 404 page
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
