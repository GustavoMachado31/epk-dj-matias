import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Mail, MessageSquare, Instagram, Youtube, Music, Send } from 'lucide-angular';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './booking.html',
})
export class BookingComponent {
  readonly MailIcon = Mail;
  readonly WhatsappIcon = MessageSquare;
  readonly InstagramIcon = Instagram;
  readonly YoutubeIcon = Youtube;
  readonly MusicIcon = Music; // Para Spotify/Soundcloud
  readonly SendIcon = Send;
}