import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './messages.component';
import { AppComponent } from './app.component';

import { WebService } from './web.services';
import { AuthService } from './auth.service';
import { NavComponent } from './nav.component';
import { NewMessageComponent } from './new-message.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HomeComponent } from './home.component';
// Removed for assignment
// import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { UserComponent } from './user.component'

var routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'messages',
        component: MessagesComponent
    },
    {
        path: 'messages/:name',
        component: MessagesComponent
    },
    // Removed for assignment
    // {
    //     path: 'register',
    //     component: RegisterComponent
    // },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'user',
        component: UserComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    //RegisterComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    WebService,
    AuthService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
