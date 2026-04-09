import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  readonly MenuIcon = Menu;
  readonly XIcon = X;
  
  isMenuOpen = false;
  isScrolled = false;

  // Abre/Fecha o menu no celular e trava o scroll da página no fundo
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  // Fecha o menu quando o usuário clica em um link
  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }

  // Detecta a rolagem da página para mudar a cor da barra
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}