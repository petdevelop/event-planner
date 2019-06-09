import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendsService } from '../event-detail/friends/friends.service';
import { LoginService } from './login.service';

declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    private friendsService: FriendsService,
    private loginService: LoginService) { }

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
       let js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = 'https://connect.facebook.net/en_US/sdk.js';
       fjs.parentNode.insertBefore(js, fjs);
     })(document, 'script', 'facebook-jssdk');
  }

  public login() {
    if (localStorage.getItem('user')) {
      this.loginService.setUserFromLocalStorage();
      this.router.navigateByUrl('/home');
    } else {
      FB.login(response => {
        if (response.authResponse) {
          this.router.navigateByUrl('/home');

          FB.api(`/${response.authResponse.userID}/`, 'GET', {}, r => {
            this.loginService.loginOrRegister(r.id, r.name)
              .subscribe(_ => {
                FB.api(`/${response.authResponse.userID}/friends`, 'GET', {}, l => {
                  this.friendsService.addFriendsList(l.data)
                    .subscribe();
                });
              });
          });

        } else {
          console.log('User login failed');
        }
      }, {scope: 'email,user_friends'});
    }
  }
}
