import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagingComponent } from './messaging/messaging.component';


const routes: Routes = [
  {
    path: 'contact',
    component: MessagingComponent,
    outlet: 'popup'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
