import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessário para o *ngIf e *ngFor
import { LucideAngularModule, Camera, X } from 'lucide-angular';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './gallery.html',
})
export class GalleryComponent {
  readonly CameraIcon = Camera;
  readonly XIcon = X;

  // Sua lista de fotos (pode trocar os links pelas suas depois)
  photos = [
    {
      url: "assets/image/360.jpeg",
      alt: "360 - Itajubá-MG",
    },
    {
      url: "assets/image/botucatu.jpeg",
      alt: "Quintou acasalar - Botucatu-SP",
    },
    {
      url: "assets/image/all.jpeg",
      alt: "All Night - Itajubá-MG",
    },
    {
      url: "assets/image/puc.jpeg",
      alt: "Demopuc - São Paulo-SP",
    },
    
  ];

  // Variável que guarda a foto clicada
  selectedPhoto: any = null;

  openLightbox(photo: any) {
    this.selectedPhoto = photo;
    // Trava o scroll da página quando a foto abre
    document.body.style.overflow = 'hidden'; 
  }

  closeLightbox() {
    this.selectedPhoto = null;
    // Libera o scroll da página quando fecha
    document.body.style.overflow = 'auto'; 
  }
}