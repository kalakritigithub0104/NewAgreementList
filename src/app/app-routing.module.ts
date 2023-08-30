import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementListComponent } from './agreement-list/agreement-list.component';
import { NewEntryComponent } from './new-entry/new-entry.component';

const routes: Routes = [
  {path: 'Agreement',component:AgreementListComponent},
  {path:'Agreement/New-entry',component:NewEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
