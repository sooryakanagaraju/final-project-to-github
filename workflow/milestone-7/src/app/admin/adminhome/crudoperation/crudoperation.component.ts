import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MovieService } from 'src/app/shared/services/movie.service';
import { CoreService } from '../../services/core.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-crudoperation',
  templateUrl: './crudoperation.component.html',
  styleUrls: ['./crudoperation.component.css']
})
export class CrudoperationComponent implements OnInit {
  movForm: FormGroup;

  genre:string[]=[
    'Adventure',
    'Action',
    'Fanasy',
    'Drama',
    'Comedy'
  ]

  constructor(
    private _fb: FormBuilder,
    private _empService: MovieService,
    private _dialogRef: MatDialogRef<CrudoperationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.movForm = this._fb.group({
      name: '',
      genre: '',
      Released: '',
      director: '',
      starring: '',
      description: '',
      image: '',
    });
  }

  ngOnInit(): void {
    this.movForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.movForm.valid) {
      if (this.data) {
        this._empService
          .updateMovie(this.data.id, this.movForm.value)
          .subscribe({
            next: (val: any) => {
             this._coreService.openSnackBar('details updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._empService.addMovie(this.movForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

/* 
  ngOnInit(): void {
  } */

}
