
import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRes } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';


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

    const user = {
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    }

    // call api and create preorder
    const res: LoginRes = await this.auth.login(user);
    sessionStorage.setItem('token', res.token);
    sessionStorage.setItem('role', res.user.role);
    this.router.navigateByUrl('preorder');
  }

  submit() {
    console.log(this.loginForm.value);

  }
}
