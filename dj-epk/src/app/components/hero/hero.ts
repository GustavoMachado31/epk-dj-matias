import { Component } from '@angular/core';
import { LucideAngularModule, ChevronDown, Headphones } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './hero.html',
})
export class HeroComponent {
  readonly Headphones = Headphones;
  readonly ChevronDown = ChevronDown;
}