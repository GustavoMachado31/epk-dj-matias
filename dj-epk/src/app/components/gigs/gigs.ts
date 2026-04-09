import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário pro *ngFor
import { LucideAngularModule, CalendarDays, MapPin, Users } from 'lucide-angular';

@Component({
  selector: 'app-gigs',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './gigs.html',
})
export class GigsComponent {
  readonly CalendarIcon = CalendarDays;
  readonly MapPinIcon = MapPin;
  readonly UsersIcon = Users;

  highlights = [
    { event: "Terraço Club", location: "São Paulo, SP", year: "2026" },
    { event: "EDUNI", location: "Itajubá, MG", year: "2025" },
    { event: "Back to Class UNIVAP", location: "São José dos Campos, SP", year: "2025" },
    { event: "Nossa Farra", location: "Pouso Alegre, MG", year: "2025" },
    { event: "360° S4B Produções", location: "Itajubá, MG", year: "2025" },
    { event: "All Night Vamo et events", location: "Itajubá, MG", year: "2024" },
  ];

  supports = [
    "MC Paiva",
    "MC Hariel",
    "DJ Ery",
    "DJ Blakes",
    "Petrus",
    "Novin Yarp",
    "Caio Prince",
    "Shavozo",
    "DJ Carai",
    "Missiatto",
    "GP da ZL",
    "MU540",
    "Tresk",
    "WS da Igrejinha"
  ];

  stats = [
    { value: "100+", label: "Shows" },
    { value: "10+", label: "Cidades" },
    { value: "5", label: "Anos" },
  ];
}