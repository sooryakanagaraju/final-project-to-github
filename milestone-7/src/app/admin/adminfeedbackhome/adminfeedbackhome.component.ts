import { Component,  OnInit , ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { MatSort } from '@angular/material/sort';

import { MatDialog } from '@angular/material/dialog';
import { CRUDFeedbackComponent } from './crudfeedback/crudfeedback.component';
import { MoviereviewService } from 'src/app/shared/services/moviereview.service';
/* import { error } from 'console'; */
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-adminfeedbackhome',
  templateUrl: './adminfeedbackhome.component.html',
  styleUrls: ['./adminfeedbackhome.component.css']
})
export class AdminfeedbackhomeComponent implements OnInit {

  constructor(public md:MatDialog, private mr:MoviereviewService, private cs : CoreService) { }

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'message',
    'action',
  ];


  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getReviewlist();
  }

  AddEditFeedback(){
    const dialogRef = this.md.open(CRUDFeedbackComponent)
    dialogRef.afterClosed().subscribe(
      {
        next:(val)=>{
          if(val){
            this.getReviewlist();
          }
        }
      }
    )

  }

  getReviewlist(){
    this.mr.getReviewlist().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },
      error : console.log
    })

  }

  

  applyFilter(event:Event){
    const filtval = (event.target as HTMLInputElement).value
    this.dataSource.filter = filtval.toLowerCase().trim()

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage()
    }
    
  }

  EditFeedback(data : any){
    const dialogRef = this.md.open(CRUDFeedbackComponent, {
      data,});
    
      dialogRef.afterClosed().subscribe({
        next:(val)=>{
          if(val){
            this.getReviewlist()
          }
        },
      })
        
      }


  

  deleteFeedback(id : number){
    this.mr.deleteReview(id).subscribe({
      next:(res)=>{
        this.cs.openSnackBar("deleted successfully");
        this.getReviewlist();
      },
      error : console.log
    })


  }






  
}
