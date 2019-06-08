import { Component, OnInit } from '@angular/core';
import { FriendsService } from './friends.service';
import { FriendsModel } from './friends.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  public friendsList$: Observable<Array<FriendsModel>>;

  constructor(
    private friendsService: FriendsService) { }

  ngOnInit() {
    this.friendsList$ = this.friendsService.friendsList$;

    this.friendsList$.subscribe(r => console.log(r));

    // this.friendsService.friendsList$.next(this.friendsService.friendsList$.getValue());
  }

}
