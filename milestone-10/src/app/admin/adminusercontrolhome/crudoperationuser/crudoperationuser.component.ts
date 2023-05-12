import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../../services/core.service';
import { UserlistService } from 'src/app/shared/services/userlist.service';

@Component({
  selector: 'app-crudoperationuser',
  templateUrl: './crudoperationuser.component.html',
  styleUrls: ['./crudoperationuser.component.css']
})
export class CrudoperationuserComponent implements OnInit {


  feedForm : FormGroup
  constructor(private _fb: FormBuilder,
    private rs: UserlistService,
    private _dialogRef: MatDialogRef<CrudoperationuserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService) { 

    
   this.feedForm = this._fb.group({
  
    username :'',
    email :'',
   /*  message : '', */
/*     product : name, */
      });
    }
  
    ngOnInit(): void {
      this.feedForm.patchValue(this.data);
    }
  
    /* onFormSubmit() {
      if (this.feedForm.valid) {
        if (this.data) {
          this.rs
            .updateuserlist(this.data.id, this.feedForm.value)
            .subscribe({
              next: (val: any) => {
               this._coreService.openSnackBar('Employee detail updated!');
                this._dialogRef.close(true);
              },
              error: (err: any) => {
                console.error(err);
              },
            });
        } else {
          this.rs.addUser(this.feedForm.value).subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee added successfully');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
        }
      }
    }
   */
  /* 
    ngOnInit(): void {
    } */
  
}
