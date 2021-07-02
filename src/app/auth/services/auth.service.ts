import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequestInterface} from '../types/loginRequest.interface';
import {LoginResponseInterface} from '../types/loginResponse.interface';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(data: LoginRequestInterface): Observable<LoginResponseInterface> {
    const url = environment.apiUrl + '/users/authenticate';

    return this.http
      .post<LoginResponseInterface>(url, data);
  }
}
