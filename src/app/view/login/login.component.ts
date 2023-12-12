import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { apiHost } from 'src/utils/utils';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private auth: AuthService,
  ) { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

 async submitLoginForm() {
  console.log(this.loginForm.value);

    const user = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    }

    const res = await this.auth.login(user);

    console.log(res);

    // call api and create preorder

    this.router.navigateByUrl('preorder');
    console.log(this.loginForm.value);

  }
}
