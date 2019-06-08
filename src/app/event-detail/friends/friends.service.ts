import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FriendsModel } from './friends.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  public friendsList$ = new BehaviorSubject<Array<FriendsModel>>(null);

  constructor(private httpclient: HttpClient) { }

  public addFriendsList(friendsList: Array<FriendsModel>): Observable<any> {
    return this.httpclient.post(`${environment.url}/friends/list/`, friendsList)
        .pipe(tap(res => this.friendsList$.next(res.ops)));
  }
}
