import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { BioComponent } from './components/bio/bio';
import { MusicComponent } from './components/music/music';
import { GigsComponent } from './components/gigs/gigs';
import { GalleryComponent } from './components/gallery/gallery';
import { AftermoviesComponent } from './components/aftermovies/aftermovies';
import { RiderComponent } from './components/rider/rider';
import { BookingComponent } from './components/booking/booking';
import { NavbarComponent } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [HeroComponent, BioComponent, MusicComponent, GigsComponent, GalleryComponent, AftermoviesComponent, RiderComponent, BookingComponent, NavbarComponent], 
  templateUrl: './app.html',
})
export class App {
  // ... resto do seu código
}