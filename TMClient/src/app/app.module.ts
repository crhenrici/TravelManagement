import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelEditorComponent } from './travel-editor/travel-editor.component';
import { PersonEditorComponent } from './person-editor/person-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelEditorComponent,
    PersonEditorComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
