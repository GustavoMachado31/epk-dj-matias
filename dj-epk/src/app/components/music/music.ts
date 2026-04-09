import { Component } from '@angular/core';
import { LucideAngularModule, Disc, Play, Youtube, Radio, Lock, Headphones } from 'lucide-angular';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './music.html',
})
export class MusicComponent {
  readonly DiscIcon = Disc;
  readonly PlayIcon = Play;
  readonly YoutubeIcon = Youtube;
  readonly RadioIcon = Radio;
  readonly LockIcon = Lock;
  readonly HeadphonesIcon = Headphones;
}