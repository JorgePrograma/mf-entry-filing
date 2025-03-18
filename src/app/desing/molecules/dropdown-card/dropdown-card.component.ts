import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-card',
  templateUrl: './dropdown-card.component.html',
  styleUrls: ['./dropdown-card.component.css'],
})
export class DropdownCardComponent {
  @Input() title: string = ''; // Título del dropdown
  isOpen: boolean = false; // Estado del dropdown (abierto/cerrado)

  // Método para alternar la visibilidad del contenido
  toggleContent() {
    this.isOpen = !this.isOpen;
  }
}
