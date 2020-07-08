import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelEditorComponent } from './travel-editor/travel-editor.component';
import { AppComponent } from './app.component';
import { PersonEditorComponent } from './person-editor/person-editor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'person-edit', component: PersonEditorComponent},
{ path: 'travel-edit', component: TravelEditorComponent},
{ path: 'travel-list', component: TravelListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
