import { Component } from '@angular/core';
import { LucideAngularModule, Film, PlayCircle } from 'lucide-angular';

@Component({
  selector: 'app-aftermovies',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './aftermovies.html',
})
export class AftermoviesComponent {
  readonly FilmIcon = Film;
  readonly PlayIcon = PlayCircle;
}