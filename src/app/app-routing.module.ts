import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';

import {ListComponent} from './components/personal-posts/list/list.component';
import {CreatePostComponent} from './components/personal-posts/create-post/create-post.component';
import {HomeComponent as HomeComponentPersonalPosts} from './components/personal-posts/home/home.component';
// import {AnonymousUserGuard} from './guards/anonymous-user.guard';
import {AuthGuard} from './guards/auth.guard';
import {AnonymousGuard} from './guards/anonymous.guard';
import {RouteNotFoundComponent} from './components/route-not-found/route-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent, canActivate: [AnonymousGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AnonymousGuard]},
  {
    path: 'personal-posts', component: HomeComponentPersonalPosts, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: ListComponent},
      {path: 'create', component: CreatePostComponent}
    ]
  }, {path: '**', component: RouteNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
