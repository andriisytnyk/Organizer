import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {LoginRequestInterface} from '../../types/loginRequest.interface';

@Component({
  selector: 'o-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @ts-ignore
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      username: '',
      password: '',
    });
  }

  onSubmit(): void {
    const request: LoginRequestInterface = this.form.value;

    this.authService.login(request).subscribe((response) => {
      console.log(response);
    });
  }
}
