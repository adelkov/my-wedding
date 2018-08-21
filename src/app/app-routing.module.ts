import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AppComponent} from "./app.component";
import {NavigationComponent} from "./navigation/navigation.component";

const appRoutes: Routes = [
  { path: '', component: NavigationComponent }
  // { path: 'users', component: UsersComponent, children: [
  //     { path: ':id/:name', component: UserComponent }
  //   ] },
  // {
  //   path: 'servers',
  //   // canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   component: ServersComponent,
  //   children: [
  //     { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
  //     { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  //   ] },
  // // { path: 'not-found', component: PageNotFoundComponent },
  // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  // { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
