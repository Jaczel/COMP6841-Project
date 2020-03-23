import { NgModule } from '@angular/core';
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
import { NewMessageComponent } from './new-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})

export class AppModule { }
