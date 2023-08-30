import { Component, OnDestroy } from '@angular/core';
import { AgreementType } from '../models/AgreementType.request.model';
import { Subscription } from 'rxjs';
import { AgreementService } from '../services/agreement.service';
// import { OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnDestroy {
  model:AgreementType ;
  private AgreementSubscription?: Subscription;

constructor(private agreementservice:AgreementService)
{
   this.model =
   {
    id: 0,
    agreementTypeName: '',
    createdBy: '',
    createdOn:  new Date() ,
    lastModifiedBy: '',
    lastModifiedOn:new Date()  ,
    isActive: true,
    displayName: '',
    applicableFor: '',
    defaultIncoterm: '',
    defaultStrategy: '',
   }
}
// closeDialog(): void {
//   this.dialogRef.close();
// }

onFormSubmit()
{
  this.AgreementSubscription = this.agreementservice.newentry(this.model)
  .subscribe({
    next: (res)=>{console.log('New entry added')
    window.location.reload();
  }
  })
}

  ngOnDestroy(): void {
    this.AgreementSubscription?.unsubscribe();
  }
//   openFormPopup(): void {
//     const dialogRef = this.dialog.open(NewEntryComponent, {
//       width: '5000px', 
//       disableClose: true 
//     });

// }
// onNavigateToPage(): void {
 
//   this.dialoggRef.close();
//   // this.router.navigate(['/agreement-list']); 
//   this.router.navigate(['/Agreement/New-entry']);
// }


}