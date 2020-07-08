import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonEditorComponent } from './person-editor/person-editor.component';
import { TravelEditorComponent } from './travel-editor/travel-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TravelListComponent } from './travel-list/travel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonEditorComponent,
    TravelEditorComponent,
    TravelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
