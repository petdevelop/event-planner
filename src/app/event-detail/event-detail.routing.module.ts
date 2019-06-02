import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailPage } from './event-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EventDetailPage,
    children:
      [
        {
          path: 'general',
          children:
            [
              {
                path: '',
                loadChildren: './general/general.module#GeneralPageModule'
              }
            ]
        },
        {
          path: 'friends',
          children:
            [
              {
                path: '',
                loadChildren: './friends/friends.module#FriendsPageModule'
              }
            ]
        },
        {
          path: 'items',
          children:
            [
              {
                path: '',
                loadChildren: './items/items.module#ItemsPageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/event-detail/general',
          pathMatch: 'full'
        }
      ]
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class EventDetailPageRoutingModule {}