import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import {AuthService} from './services/auth.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {LoginEffect} from './store/effects/login.effect';
import {RegisterComponent} from './components/register/register.component';
import {RegisterEffect} from './store/effects/register.effect';
import {PersistenceService} from '../shared/services/persistence.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([
      LoginEffect,
      RegisterEffect
    ]),
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthService, PersistenceService]
})
export class AuthModule {}
