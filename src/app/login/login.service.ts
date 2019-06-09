import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from './userModel';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user$ = new BehaviorSubject<UserModel>(null);

  constructor(
    private httpClient: HttpClient,
  ) { }

  public loginOrRegister(id: string, name: string): Observable<any> {
    return this.httpClient.post(`${environment.url}/users`, {id, name})
      .pipe(tap(r => {
        if (r.name) {
          this.user$.next(new UserModel(r));
          localStorage.setItem('user', JSON.stringify(r));
        }
      }));
  }

  public setUserFromLocalStorage(): void {
    const user: UserModel = JSON.parse(localStorage.getItem('user'));
    this.user$.next(new UserModel(user));
  }
}
