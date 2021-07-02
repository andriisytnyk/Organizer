import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loginAction, loginFailureAction, loginSuccessAction} from '../actions/login.action';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {CurrentUserInterface} from '../../../shared/types/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            // this.persistenceService.set('accessToken', loginResponse.token);
            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            console.log(errorResponse.error.message);
            return of(
              loginFailureAction({ errors: errorResponse.error.message })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    // private persistenceService: PersistenceService,
    private router: Router
  ) {}
}