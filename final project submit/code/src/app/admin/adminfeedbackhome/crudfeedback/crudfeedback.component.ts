import { Component, OnInit ,Inject } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { CoreService } from '../../services/core.service';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MoviereviewService } from 'src/app/shared/services/moviereview.service';

@Component({
  selector: 'app-crudfeedback',
  templateUrl: './crudfeedback.component.html',
  styleUrls: ['./crudfeedback.component.css']
})
export class CRUDFeedbackComponent implements OnInit {

   feedForm : FormGroup
  constructor(private _fb: FormBuilder,
    private rs: MoviereviewService,
    private _dialogRef: MatDialogRef<CRUDFeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService) { 

    
   this.feedForm = this._fb.group({
  
    name :'',
    email :'',
    message : '',

      });
    }
  
    ngOnInit(): void {
      this.feedForm.patchValue(this.data);
    }
  
    onFormSubmit() {
      if (this.feedForm.valid) {
        if (this.data) {
          this.rs
            .updateReview(this.data.id, this.feedForm.value)
            .subscribe({
              next: (val: any) => {
               this._coreService.openSnackBar('feedback detail updated!');
                this._dialogRef.close(true);
              },
              error: (err: any) => {
                console.error(err);
              },
            });
        } else {
          this.rs.addReview(this.feedForm.value).subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('feeddback added successfully');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
        }
      }
    }

  
  }
  
