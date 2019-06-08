import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'events',
    loadChildren: './events/events.module#EventsPageModule'
  },
  {
    path: 'create-event',
    loadChildren: './create-event/create-event.module#CreateEventPageModule'
  },
  {
    path: 'event-detail',
    loadChildren: './event-detail/event-detail.module#EventDetailPageModule'
  },  { path: 'create-item', loadChildren: './create-event/create-item/create-item.module#CreateItemPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
