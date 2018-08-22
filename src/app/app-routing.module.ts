import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavigationComponent} from "./navigation/navigation.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'wedding/:id', component: NavigationComponent},
  {path: '**', redirectTo: ''} // todo: /not-found page
]

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

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
