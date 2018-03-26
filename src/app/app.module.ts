import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {PostComponent} from './components/post/post.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './/app-routing.module';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';
import {FormsModule} from '@angular/forms';
import {ListComponent} from './components/personal-posts/list/list.component';
import {HomeComponent as HomeComponentPersonalPosts} from './components/personal-posts/home/home.component';
import {CreatePostComponent} from './components/personal-posts/create-post/create-post.component';
import {AuthGuard} from './guards/auth.guard';
import {AnonymousGuard} from './guards/anonymous.guard';
import {DataService} from './services/data.service';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    PostComponent,
    HomeComponent,
    ListComponent,
    HomeComponentPersonalPosts,
    CreatePostComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SnotifyModule

  ],
  providers: [UserService, PostService, AuthGuard, AnonymousGuard, DataService, {provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
