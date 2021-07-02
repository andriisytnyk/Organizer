import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequestInterface} from '../types/loginRequest.interface';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {CurrentUserInterface} from '../../shared/types/currentUser.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/authenticate';

    return this.http
      .post<CurrentUserInterface>(url, data);
  }
}
