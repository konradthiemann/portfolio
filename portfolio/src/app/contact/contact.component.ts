import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  post = {
    endPoint: 'https://konrad-thiemann.de/send_mail.php/',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  })

  emailSent: boolean = false;
  nameValid: any = 0;
  emailValid: any = 0;
  messageValid: any = 0;

  constructor(private http: HttpClient) {}

  checkValidation() {
    this.checkForValidInput();
    this.checkForEmptyInput();
  }

  checkForEmptyInput() {
    let name: any = document.getElementById("inputName");
    let email: any = document.getElementById("inputEmail");
    let message: any = document.getElementById("inputMessage");

    if (name.value === "" ) {
      this.nameValid = 0;
    };

    if (email.value === "") {
      this.emailValid = 0;
    };

    if (message.value === "") {
      this.messageValid = 0;
    };


  }

  checkForValidInput() {
    
    if (this.contactForm.controls['name'].status === 'VALID') {
      this.nameValid = 1;
    }
    if (this.contactForm.controls['email'].status === 'VALID') {
      this.emailValid = 1;
    }
    if (this.contactForm.controls['message'].status === 'VALID') {
      this.messageValid = 1;
    }
  }

  onSubmit(ngForm: any) {

    if (this.contactForm.valid) {

      let data = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message
      }
      this.http
        .post(this.post.endPoint, data)
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.emailSent = true;
            this.timeOutSendMail();
          },
          error: (error) => {
          },
        });
    } else {
      this.throwErrors()
    }
  }

  timeOutSendMail() {
    setTimeout(() => {
      this.emailSent = false;
    }, 4000)

  }

  throwErrors() {

    if (this.contactForm.controls['name'].status === 'INVALID') {
      this.nameValid = 2;
    }
    if (this.contactForm.controls['email'].status === 'INVALID') {
      this.emailValid = 2;
    }
    if (this.contactForm.controls['message'].status === 'INVALID') {
      this.messageValid = 2;
    }
    setTimeout(() => {
      this.nameValid = 0;
      this.emailValid = 0;
      this.messageValid = 0;
      this.emailSent = false;
    }, 4000)
  }
}
