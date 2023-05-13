import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from '../services/core.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CrudoperationuserComponent } from './crudoperationuser/crudoperationuser.component';
import { UserlistService } from 'src/app/shared/services/userlist.service';

@Component({
  selector: 'app-adminusercontrolhome',
  templateUrl: './adminusercontrolhome.component.html',
  styleUrls: ['./adminusercontrolhome.component.css']
})
export class AdminusercontrolhomeComponent implements OnInit {

  constructor(public md:MatDialog, private mr:UserlistService , private cs : CoreService) { }

  displayedColumns: string[] = [
    'id',
    'username',
    'email',
    'action',
  ];


  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getUserlist();
  }


  getUserlist(){
    this.mr.getUserlist("user").subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
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


  deleteUser(id : number){
    this.mr.deleteuser(id).subscribe({
      next:(res)=>{
        this.cs.openSnackBar("user deleted successfully");
        this.getUserlist();
      },
      error : console.log
    })
  }
}
