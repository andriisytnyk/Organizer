import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {isSubmittingSelector} from '../../store/selectors';
import {AppStateInterface} from '../../../shared/types/appState.interface';
import {registerAction} from '../../store/actions/register.action';
import {RegisterRequestInterface} from '../../types/registerRequest.interface';

@Component({
  selector: 'o-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  // @ts-ignore
  form: FormGroup;
  // @ts-ignore
  isSubmitting$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      username: '',
      password: '',
      email: ''
    });
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = this.form.value;

    this.store.dispatch(registerAction({ request }));
  }
}
