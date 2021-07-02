import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginRequestInterface} from '../../types/loginRequest.interface';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {loginAction} from '../../store/actions/login.action';
import {isSubmittingSelector} from '../../store/selectors';
import {AppStateInterface} from '../../../shared/types/appState.interface';

@Component({
  selector: 'o-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @ts-ignore
  form: FormGroup;
  // @ts-ignore
  isSubmitting$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store<AppStateInterface>) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      username: '',
      password: '',
    });
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  onSubmit(): void {
    const request: LoginRequestInterface = this.form.value;

    this.store.dispatch(loginAction({ request }));
  }
}
