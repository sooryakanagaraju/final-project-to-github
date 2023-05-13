import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartData, ChartOptions } from 'chart.js';
import { map } from 'rxjs';
import { MovieService } from 'src/app/shared/services/movie.service';


interface Movie {
  id: number;
  name: string;
  genre: string;
  Released: number;
  director: string;
  starring: string;
  description: string;
  image: string;
  coverphoto: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];
  releasedYears: number[] = [];

  constructor(private myService: MovieService, private http :HttpClient) { }

  ngOnInit() { }

}

