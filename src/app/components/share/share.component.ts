import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as intlTelInput from 'intl-tel-input';
declare var intlTelInputUtils: { numberFormat: { E164: any; }; };

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  @ViewChild('snackbar') snackbar!: ElementRef;
  phoneNumber: any = '';
  cssClass = 'form-control';
  iti: any;
  isInvalid = false;
  selectedCountryCode: any;
  @ViewChild('telInput') telInput!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  copyLink() {
    // Get the text to copy
    const linkText = document.querySelector('.card-link')?.textContent?.trim();

    // Create a temporary textarea element to copy the text
    let textarea: any = document.createElement('textarea');
    textarea.value = linkText;
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Show the snackbar
    const snackbarElement = this.snackbar.nativeElement as HTMLElement;
    snackbarElement.classList.add('show');
    setTimeout(() => {
      snackbarElement.classList.remove('show');
    }, 3000);
  }

  // ngAfterViewInit() {
  //   intlTelInput(this.telInput.nativeElement, {
  //     initialCountry: 'auto',
  //     separateDialCode: true,
  //     allowDropdown: true, // Enable country selector dropdown
  //     utilsScript: "node_modules/intl-tel-input/build/js/utils.js"
  //   });
  // }

  // ngOnDestroy() {
  //   this.iti.destroy();
  // }

  // onFocus = () => {
  //   if (this.phoneNumber == undefined || this.phoneNumber == "") {
  //     var getCode = this.iti.getSelectedCountryData().dialCode;
  //     this.phoneNumber = "+" + getCode;
  //   }
  // }

  // onBlur = () => {
  //   this.isInvalid = false;
  //   if (this.phoneNumber != undefined && this.phoneNumber.trim()) {
  //     if (this.iti.isValidNumber()) {
  //       this.isInvalid = false;
  //     }
  //     else {
  //       this.isInvalid = true;
  //     }
  //   }
  // }

  // onInputKeyPress = (event: KeyboardEvent) => {
  //   const allowedChars = /[0-9\+\-\ ]/;
  //   const allowedCtrlChars = /[axcv]/; // Allows copy-pasting
  //   const allowedOtherKeys = [
  //     'ArrowLeft',
  //     'ArrowUp',
  //     'ArrowRight',
  //     'ArrowDown',
  //     'Home',
  //     'End',
  //     'Insert',
  //     'Delete',
  //     'Backspace',
  //   ];

  //   if (
  //     !allowedChars.test(event.key) &&
  //     !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
  //     !allowedOtherKeys.includes(event.key)
  //   ) {
  //     event.preventDefault();
  //   }
  // }

  // formatIntlTelInput() {
  //   if (typeof intlTelInputUtils !== 'undefined') { // utils are lazy loaded, so must check
  //     var currentText = this.iti.getNumber(intlTelInputUtils.numberFormat.E164);
  //     if (typeof currentText === 'string') { // sometimes the currentText is an object :)
  //       this.iti.setNumber(currentText); // will autoformat because of formatOnDisplay=true
  //     }
  //   }
  // }

  // onPhoneNumberChange = () => {
  //   this.selectedCountryCode = this.iti.getSelectedCountryData().dialCode;
  //   // this.formatIntlTelInput();
  // }
}
