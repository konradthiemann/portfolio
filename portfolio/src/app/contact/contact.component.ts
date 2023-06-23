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
    endPoint: 'http://konrad-thiemann.de/send_mail.php/',
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
  nameValid: boolean = true;
  emailValid: boolean = true;
  messageValid: boolean = true;

  constructor(private http: HttpClient) { }

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
            console.log(response);
            ngForm.resetForm()
            this.emailSent = true;
            this.timeOutSendMail();
          },
          error: (error) => {
            console.log(error);
          },
        });
    } else {
      this.throwErrors()
    }
  }

  timeOutSendMail() {
    setTimeout(() => {
      this.emailSent = false;
    }, 2000)

  }

  throwErrors() {

    if (this.contactForm.controls['name'].status === 'INVALID') {
      this.nameValid = false;
    }
    if (this.contactForm.controls['email'].status === 'INVALID') {
      this.emailValid = false;
    }
    if (this.contactForm.controls['message'].status === 'INVALID') {
      this.messageValid = false;
    }
    setTimeout(() => {
      this.nameValid = true;
      this.emailValid = true;
      this.messageValid = true;
      this.emailSent = false;
    }, 2000)
  }
}
