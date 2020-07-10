import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonEditorComponent } from './person-editor/person-editor.component';
import { TravelEditorComponent } from './travel-editor/travel-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TravelListComponent } from './travel-list/travel-list.component';
import { FormsModule } from '@angular/forms';
import { TravelDetailsComponent } from './travel-list/travel-details/travel-details.component';
import { TravelTableComponent } from './travel-list/travel-table/travel-table.component';
import { EditTravelComponent } from './travel-editor/edit-travel/edit-travel.component';
import { EditStayComponent } from './travel-editor/edit-stay/edit-stay.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonEditorComponent,
    TravelEditorComponent,
    TravelListComponent,
    TravelDetailsComponent,
    TravelTableComponent,
    EditTravelComponent,
    EditStayComponent
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
    MatTableModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
