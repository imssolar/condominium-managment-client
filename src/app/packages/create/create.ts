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
}
