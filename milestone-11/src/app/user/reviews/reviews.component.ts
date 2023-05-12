import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MoviereviewService } from 'src/app/shared/services/moviereview.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() prod:string | undefined;
  reviewForm:any;

       constructor(private fb:FormBuilder,private rs:MoviereviewService){
       this.reviewForm = this.fb.group({
          name:['',[Validators.required,Validators.minLength(3)]],
          message:['',[Validators.required,Validators.minLength(4)]],
          email:['',[Validators.required, Validators.pattern(
            "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],

        });
       }

       saveReview(movie:any){
          
          var temp:any={
          id: Math.round(Math.random()*10000),
          name: this.reviewForm.value.name,
          email: this.reviewForm.value.email,
          message:this.reviewForm.value.message,
          product:movie

        }
        this.rs.postReview(temp).subscribe(
         { 
          next: (data:any)=>{
            alert('Your Review is saved')
            location.reload();
          },
          error:(error)=>alert('Error occured during saving...')
        }

        )

      }


  ngOnInit(): void {
  }

}
