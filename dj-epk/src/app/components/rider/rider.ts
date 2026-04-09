import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Settings, Monitor, Speaker, Cable, AlertCircle } from 'lucide-angular';

@Component({
  selector: 'app-rider',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './rider.html',
})
export class RiderComponent {
  readonly SettingsIcon = Settings;
  readonly MonitorIcon = Monitor;
  readonly SpeakerIcon = Speaker; // Troquei um dos monitors repetidos por uma caixa de som real!
  readonly CableIcon = Cable;
  readonly AlertIcon = AlertCircle;

  equipment = [
    {
      category: "Estrutura",
      items: [
        "Mesa para os equipamentos (praticável ou no mínimo 1m de altura)",
        "Régua de energia com pelo menos 4 tomadas",
      ],
    },
    {
      category: "Som",
      items: [
        "Sistema de som P.A. compatível com o local",
        "Retorno de palco (Monitoração L/R)",
      ],
    },
    {
      category: "Áudio",
      items: [
        "1x Microfone com fio (Talkback)",
        "1x Direct Box estéreo (ou 2x Mono)",
      ],
    },
    {
      category: "Cabeamento",
      items: [
        "2x Cabos XLR (Spare/Reserva)",
        "1x Cabo RCA (Spare/Reserva)",
      ],
    },
  ];

  notes = [
    "Iluminação da cabine suficiente para visibilidade dos equipamentos",
    "Água mineral disponível na cabine durante toda a apresentação",
    "Soundcheck (Passagem de som) estritamente necessário antes da abertura",
  ];
}