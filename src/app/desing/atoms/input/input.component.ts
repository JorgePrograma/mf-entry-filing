import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() label: string = ''; // Etiqueta del input
  @Input() placeholder: string = ''; // Placeholder del input
  @Input() type: string = 'text'; // Tipo de input (text, number, email, etc.)
  @Input() required: boolean = false; // Si el campo es requerido
  @Input() value: string = ''; // Valor del input
  @Input() errorMessage: string = ''; // Mensaje de error
  @Input() showError: boolean = false; // Mostrar mensaje de error

  @Output() valueChange = new EventEmitter<string>(); // Emite el valor cuando cambia

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value); // Emite el nuevo valor
  }
}
