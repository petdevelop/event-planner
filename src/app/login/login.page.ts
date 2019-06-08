import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendsService } from '../event-detail/friends/friends.service';

declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private friendsService: FriendsService) { }

  ngOnInit() {
    (window as any).fbAsyncInit = () => {
      FB.init({
        appId      : '1233920546785383',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1',
      });
      FB.AppEvents.logPageView();
    };

    ((d, s, id) => {
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     })(document, 'script', 'facebook-jssdk');

  }

  public submitLogin() {
    FB.login((response) => {
      if (response.authResponse) {
        this.router.navigateByUrl('/home');

        FB.api(`/${response.authResponse.userID}/friends`, 'GET', {}, r => {
            console.log(r.data);
            this.friendsService.addFriendsList(r.data).subscribe();
          }
        );
      } else {
        console.log('User login failed');
      }
    }, {scope: 'user_friends'});
  }

}
