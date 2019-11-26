import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    theme: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  submitForm() {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) {
      return;
    }

    this.httpClient.post('/api/sendEmail', this.contactForm.value).subscribe(
      (res: any) => {
        if (res.status === 'error') {
          alert(res.message);
          return;
        }
        alert('Письмо успешно доставлено');
      },
      err => alert(err.message)
    );
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get theme() {
    return this.contactForm.get('theme');
  }
}
