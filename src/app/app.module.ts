import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';    
import { SearchPipe } from './pipes/filter-pipe';
import { KeysPipe } from './pipes/keys-pipe';
import { AppComponent }   from './app.component';
import { HttpModule, Http } from '@angular/http';
import { TranslateService }   from './translate';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, SearchPipe, KeysPipe ], // Inject Translate Pipe here
  bootstrap:    [ AppComponent ],
  providers:    [ TranslateService ]
})

export class AppModule { }