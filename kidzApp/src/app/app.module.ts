import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { NumbersComponent } from './numbers/numbers.component';
import { PuzzleService } from './puzzle.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
// import { AddPuzzleComponent } from './add-puzzle/add-puzzle.component';
import { AdminComponent } from './admin/admin.component';
import { AddNumberComponent } from './add-number/add-number.component';
import { EditNumberComponent } from './edit-number/edit-number.component';
import { AdlogComponent } from './adlog/adlog.component';
// import { LogComponent } from './log/log.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    PuzzleComponent,
    NumbersComponent,
    LoginComponent,
    // AddPuzzleComponent,
    AdminComponent,
    AddNumberComponent,
    EditNumberComponent,
    AdlogComponent,
    // LogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PuzzleService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
