import { Component } from '@angular/core';
import { LucideAngularModule, User } from 'lucide-angular';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './bio.html',
})
export class BioComponent {
  readonly UserIcon = User;
}