import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import {AuthService} from './services/auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class AuthModule {}
