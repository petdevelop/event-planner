import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { FriendsModel } from './friends.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { switchMap, map } from 'rxjs/operators';
import { LoginService } from 'src/app/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  public friendsList$ = new BehaviorSubject<Array<FriendsModel>>(null);

  constructor(
    private httpclient: HttpClient,
    private loginService: LoginService) { }

  public addFriendsList(friends: Array<FriendsModel>): Observable<any> {
    const userId = this.loginService.user$.getValue()._id;
    friends = friends.map(f => ({...f, userId}));

    return this.httpclient.get(`${environment.url}/friends/${this.loginService.user$.getValue()._id}`)
      .pipe(
        map((a: Array<FriendsModel>) => {
          const news: Array<FriendsModel> = [];
          friends.forEach(n => {
            if (! a.map(f => f.name).includes(n.name)) {
              news.push(n);
            }
          });
          return news;
        }),
        switchMap((f: Array<FriendsModel>) => {
          if (f.length > 0) {
            return this.httpclient.post(`${environment.url}/friends/list/`, f);
          }
          return of(null);
        })
      );
  }
}
