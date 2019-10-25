import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CardComponent } from './card/card.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
// import { LogComponent } from './log/log.component';
// import { PComponent } from './p/p.component';
import { AngularFireModule} from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule} from '@angular/forms';
import { KetComponent } from './ket/ket.component';





@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    CardComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UsersComponent,
    KetComponent,
   
   
   
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
