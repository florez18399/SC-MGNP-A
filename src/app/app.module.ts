import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {MeanSquaresComponent} from './mean-squares/mean-squares.component';
import { RangesComponent } from './ranges/ranges.component';
import {CongruentialComponent} from './congruential/congruential.component';
import { NormalDistComponent } from './normal-dist/normal-dist.component';
import { UniformComponent } from './uniform/uniform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeanSquaresComponent,
    RangesComponent,
    CongruentialComponent,
    NormalDistComponent,
    UniformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
