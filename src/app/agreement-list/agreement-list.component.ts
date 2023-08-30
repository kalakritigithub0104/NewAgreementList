import { Component, OnInit } from '@angular/core';
import { AgreementService } from '../services/agreement.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { NewEntryComponent } from '../new-entry/new-entry.component';


@Component({
  selector: 'app-agreement-list',
  templateUrl: './agreement-list.component.html',
  styleUrls: ['./agreement-list.component.css'],

})
export class AgreementListComponent implements OnInit {

 constructor(public service: AgreementService,private dialog: MatDialog){}
//  openFormPopup(): void {
//   const dialogRef = this.dialog.open(NewEntryComponent, {
//     width: '5000px', 
//     disableClose: true 
//   });
  

//   dialogRef.afterClosed().subscribe(result => {
//     // Logic to handle the result after the dialog is closed
//   });
// }


  ngOnInit(): void {
    this.service.refresh();
  }
  sortAscending() {
    this.service.AList.sort((a, b) => a.agreementTypeName.localeCompare(b.agreementTypeName));
}

sortDescending() {
    this.service.AList.sort((a, b) => b.agreementTypeName.localeCompare(a.agreementTypeName));
}

 

removeSorting() {
    this.service.AList = [...this.service.AList]; // Reset to the original data
}
sortAscendingCreatedBy() {
  this.service.AList.sort((a, b) => a.createdBy.localeCompare(b.createdBy));
}

 

sortDescendingCreatedBy() {
  this.service.AList.sort((a, b) => b.createdBy.localeCompare(a.createdBy));
}

 

removeSortingCreatedBy() {
  this.service.AList = [...this.service.AList]; // Reset to the original data
}

sortAscendingCreatedOn() {
  this.service.AList.sort((a, b) => a.agreementTypeName.localeCompare(b.agreementTypeName));
}

 

sortDescendingCreatedOn() {
  this.service.AList.sort((a, b) => b.agreementTypeName.localeCompare(a.agreementTypeName));
}


removeSortingCreatedOn() {
  this.service.AList = [...this.service.AList]; // Reset to the original data
}
sortAscendingModifiedBy() {
  this.service.AList.sort((a, b) => a.lastModifiedBy.localeCompare(b.lastModifiedBy));
}

 
sortDescendingModifiedBy() {
  this.service.AList.sort((a, b) => b.lastModifiedBy.localeCompare(a.lastModifiedBy));
}

 

removeSortingModifiedBy() {
  this.service.AList = [...this.service.AList]; // Reset to the original data
}
sortAscendingModifiedOn() {
  this.service.AList.sort((a, b) => a.agreementTypeName.localeCompare(b.agreementTypeName));
}

 

sortDescendingModifiedOn() {
  this.service.AList.sort((a, b) => b.agreementTypeName.localeCompare(a.agreementTypeName));
}

 

removeSortingModifiedOn() {
  this.service.AList = [...this.service.AList]; // Reset to the original data
}
sortAscendingStatus() {
  this.service.AList.sort((a, b) => a.agreementTypeName.localeCompare(b.agreementTypeName));
}

 

sortDescendingStatus() {
  this.service.AList.sort((a, b) => b.agreementTypeName.localeCompare(a.agreementTypeName));
}

 

removeSortingStatus() {
  this.service.AList = [...this.service.AList]; // Reset to the original data
}
searchQuery: string = '';

 

  get filteredCurrencies() {

    if (!this.searchQuery) {

      return this.service.AList;

    }

 

    const lowerCaseQuery = this.searchQuery.toLowerCase();

    return this.service.AList.filter(c =>

      c.agreementTypeName.toLowerCase().includes(lowerCaseQuery) 

    );

  }
}
// function closeDialog() {
//   throw new Error('Function not implemented.');
// }

