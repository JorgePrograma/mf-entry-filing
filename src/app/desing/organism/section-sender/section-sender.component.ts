import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from "../../atoms/select/select.component";
import { InputComponent } from "../../atoms/input/input.component"; // Importa FormsModule

@Component({
  selector: 'app-section-sender',
  standalone: true, // Asegúrate de que el componente sea standalone
  imports: [FormsModule, SelectComponent, InputComponent], // Importa FormsModule aquí
  templateUrl: './section-sender.component.html',
  styleUrls: ['./section-sender.component.css'],
})
export class SectionSenderComponent {
  formData: any = {
    documentType: '',
    documentNumber: '',
  };

  documentTypes = [
    { label: 'Cédula', value: 'CC' },
    { label: 'Pasaporte', value: 'PA' },
    { label: 'Tarjeta de identidad', value: 'TI' },
  ];

  submitted = false; // Para controlar si el formulario se ha enviado

  onSubmit() {
    this.submitted = true; // Marca el formulario como enviado

    // Validar campos requeridos
    if (this.formData.documentType && this.formData.documentNumber) {
      console.log('Datos del formulario:', this.formData);
      // Aquí puedes enviar los datos a un servicio o realizar otras acciones
    } else {
      console.log('Por favor, complete todos los campos requeridos.');
    }
  }
}
