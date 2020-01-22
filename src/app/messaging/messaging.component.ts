import { Component, HostBinding,ElementRef, ViewChild, } from '@angular/core';
import { Router }                 from '@angular/router';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent{

  @ViewChild('scrollMe',{static:false}) private myScrollContainer: ElementRef;
  details: string="";
  message: string="";
  output: string="";
  sending = false;

  constructor(private router: Router) {}

  send() {
    this.sending = true;
    this.details = 'Sending Message...';
    this.output+="User: "+this.message+"  <br>";
    this.message=""
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}
