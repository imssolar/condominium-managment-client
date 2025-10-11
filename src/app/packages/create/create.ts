import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class PackagesCreateComponent {
  createPackageForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createPackageForm = this.fb.group({
      trackingNumber: ['', Validators.required],
      courier: ['', Validators.required],
      recipientName: ['', Validators.required],
      apartmentNumber: ['', Validators.required],
      description: ['', Validators.min(3)],
      notes: ['', Validators.max(50)],
    });
  }

  errorMessages: { [key: string]: { [key: string]: string } } = {
    trackingNumber: { required: 'El número de pedido es obligatorio.' },
    courier: { required: 'La empresa de envío es obligatoria.' },
    recipientName: { required: 'El nombre del destinatario es obligatorio.' },
    apartmentNumber: { required: 'El número de apartamento es obligatorio.' },
    description: { min: 'La descripción debe tener al menos 3 caracteres.' },
    notes: { max: 'Las notas no pueden exceder los 50 caracteres.' },
  };

  getErrorMessage(fieldName: string): string {
    const field = this.createPackageForm.get(fieldName);
    if (field && field.errors) {
      const firstErrorKey = Object.keys(field.errors)[0];
      return this.errorMessages[fieldName][firstErrorKey] || 'Error de validación';
    }
    return '';
  }

  onSubmit() {
    if (this.createPackageForm.valid) {
      console.log('Package Created', this.createPackageForm.value);
      // Aquí puedes agregar la lógica para enviar el formulario al servidor
    } else {
      console.log('Form is invalid');
    }
  }
}
