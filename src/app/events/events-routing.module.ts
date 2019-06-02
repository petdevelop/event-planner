import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsPage } from './events.page';

const routes: Routes = [
  {
    path: '',
    component: EventsPage,
    children:
      [
        {
          path: 'all',
          children:
            [
              {
                path: '',
                loadChildren: './all/all.module#AllPageModule'
              }
            ]
        },
        {
          path: 'owner',
          children:
            [
              {
                path: '',
                loadChildren: './owner/owner.module#OwnerPageModule'
              }
            ]
        },
        {
          path: 'guest',
          children:
            [
              {
                path: '',
                loadChildren: './guest/guest.module#GuestPageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/events/all',
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
export class EventsPageRoutingModule {}