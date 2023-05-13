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

  ngOnInit() {
    this.http.get<Movie[]>('http://localhost:4500/moviess').subscribe(data => {
      this.movies = data;
      this.releasedYears = data.map(movie => movie.Released);

      const counts = new Map<number, number>();
      this.releasedYears.forEach((num) => counts.set(num, (counts.get(num) ?? 0) + 1));
      const datas: ChartData<'bar'> = {
        labels: Array.from(counts.keys()).map((num) => num.toString()),
        datasets: [
          {
            label: 'Number of movies present in the website - category-year',
            data: Array.from(counts.values()),
            backgroundColor: 'red',
            borderColor: 'rgba(54, 162, 235, 1)',

          },
        ],
      };
      
    
      const options: ChartOptions<'bar'> = {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
            },
          },
        },
      };
    
      const ctx = document.getElementById('myChart') as HTMLCanvasElement;
      const chart = new Chart(ctx, {
        type: 'bar',
        data: datas,
        options: options,
      })

    });
}

}

