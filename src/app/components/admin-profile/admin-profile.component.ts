import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openWhatsApp() {
    // Define the phone number and message
    const phoneNumber = '918140202725'; // Add your phone number here
    const message = 'Hello, I want to connect with you!'; // Add your message here
    // Construct the WhatsApp URL with the phone number and message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Open WhatsApp in a new window
    window.open(url, '_blank');
  }

  makeCall() {
    // Define the phone number
    const phoneNumber = '+918140202725'; // Add your phone number here
    // Construct the call URI
    const uri = `tel:${phoneNumber}`;
    window.open(uri, '_self');
  }

  openMap() {
    // Define the address
    const address = 'C-13, Shivsagar Society, Vastral Road, Vastral, Ahmedabad-382418'; // Add your address here

    // Construct the map URI
    const uri = `https://www.google.com/maps/place/shivsagar+soc,+C%2F13,+Vastral+Road,+Kailashdham+Society,+Mahadev+Nagar+Tekra,+Ahmedabad,+Gujarat+382418/@23.0012296,72.6521097,17.55z/data=!4m14!1m7!3m6!1s0x395e8637e2565197:0xcd80afb78ffde3a3!2sShivsagar+Society!8m2!3d23.00226!4d72.6515287!16s%2Fg%2F1pp2wxzkx!3m5!1s0x395e87782bdddc0d:0x168bbbeee485ea56!8m2!3d23.0013644!4d72.6515083!16s%2Fg%2F11sd7nd180?entry=ttu`;

    // Open the map application
    window.open(uri, '_blank');
  }

  sendEmail() {
    // Define the recipient email address
    const recipientEmail = 'quickdesignsolution@gmail.com'; // Add your recipient email here

    // Construct the mailto URI
    const uri = `mailto:${recipientEmail}`;

    // Open the default email client
    window.open(uri, '_blank');
  }

  openWeb() {
    const uri = `https://quickdesignsolution.netlify.app/`;
    window.open(uri, '_blank');
  }
}
