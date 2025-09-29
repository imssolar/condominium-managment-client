import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ErrorMessagePipe } from '../../pipes/error-message-pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, ErrorMessagePipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.pattern('^\\+56[0-9]{9}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
    return null;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.errorMessage = '';
      this.isLoading = true;
      console.log('Form values: ' + this.registerForm.value);
      setTimeout(() => {
        this.isLoading = false;
        alert('Registro exitoso (simulado), ahora puedes iniciar sesión!');
        this.registerForm.reset();
        this.router.navigate(['/login'])
      }, 1500);

    }
  }


  errorMessages: { [key: string]: { [key: string]: string } } = {
    firstName: {
      required: 'El nombre es requerido',
      minlength: 'El nombre debe tener al menos 2 caracteres',
    },
    lastName: {
      required: 'El apellido es requerido',
      minlength: 'El apellido debe tener al menos 2 caracteres',
    },
    email: {
      required: 'El correo es requerido',
      email: 'El correo no es válido',
    },
    phoneNumber: {
      required: 'El teléfono es requerido',
      pattern: 'El teléfono debe tener el formato +569XXXXXXXX',
    },
    password: {
      required: 'La contraseña es requerida',
      minlength: 'La contraseña debe tener al menos 6 caracteres',
    },
    confirmPassword: {
      required: 'Debes confirmar la contraseña',
      passwordMismatch: 'Las contraseñas no coinciden',
    },
  };

  
}
