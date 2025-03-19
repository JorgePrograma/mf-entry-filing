import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone:true,
  templateUrl: './button.component.html',
  imports:{NgClass},
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = ''; // Texto del botón
  @Input() icon: string = ''; // Ícono en formato SVG o HTML
  @Input() buttonClasses: string = 'p-10 rounded-md text-white bg-red-600'; // Clases CSS personalizables
  @Input() buttonStyles: { [key: string]: string } = {}; // Estilos en línea personalizables

  @Output() onClick = new EventEmitter<Event>(); // Evento al hacer clic
}