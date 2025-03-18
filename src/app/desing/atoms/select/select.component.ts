import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  @Input() label: string = ''; // Etiqueta del select
  @Input() options: { label: string; value: any }[] = []; // Opciones del select
  @Input() required: boolean = false; // Si el campo es requerido
  @Input() value: any = ''; // Valor seleccionado
  @Input() errorMessage: string = ''; // Mensaje de error
  @Input() showError: boolean = false; // Mostrar mensaje de error

  @Output() valueChange = new EventEmitter<any>(); // Emite el valor cuando cambia

  onSelectChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.valueChange.emit(value); // Emite el nuevo valor
  }
}
