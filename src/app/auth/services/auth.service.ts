import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequestInterface} from '../types/loginRequest.interface';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {CurrentUserInterface} from '../../shared/types/currentUser.interface';
import {RegisterRequestInterface} from '../types/registerRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/authenticate';

    return this.http
      .post<CurrentUserInterface>(url, data);
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/registration';

    return this.http
      .post<CurrentUserInterface>(url, data);
  }
}
