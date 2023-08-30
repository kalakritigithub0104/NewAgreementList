import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShiptechComponent } from './shiptech/shiptech.component';
import { AgreementListComponent } from './agreement-list/agreement-list.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ModalComponent } from './modal/modal.component';
import { AgreementService } from './services/agreement.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    ShiptechComponent,
    AgreementListComponent,
    NewEntryComponent,
    ModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule
   
  ],
  providers: [ModalComponent,NewEntryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
