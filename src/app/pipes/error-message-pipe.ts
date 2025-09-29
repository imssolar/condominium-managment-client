import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

//pure: true -> indica que el pipe es puro (solo se recalcula si cambian los argumentos) 
@Pipe({
  name: 'errorMessage',
  standalone: true,
  pure: false,
})
export class ErrorMessagePipe implements PipeTransform {
  transform(form: FormGroup, errorMessages: any, fieldName: string): string[] {
    console.log('Pipe ejecutándose para:', fieldName);
    console.log('Errores del campo:', form.get(fieldName)?.errors);
    console.log('Touched:', form.get(fieldName)?.touched);
    //Obtiene el control del formulario correspondiente al campo
    const field = form.get(fieldName);
    //Inicializa un array para almacenar los mensajes de error
    const messages: string[] = [];
    //Verifica si el campo tiene errores y si ha sido tocado o modificado (para mostrar los errores solo cuando el usuario interactúa).
    if (field?.errors && (field.touched || field.dirty)) {
      //Obtiene el objeto de mensajes de error para ese campo.
      const fieldErrors = errorMessages[fieldName];
      for (const errorKey in field.errors) {
        //Recorre los errores del campo. Si existe un mensaje definido para ese tipo de error, lo agrega al arreglo de mensajes.
        if (fieldErrors?.[errorKey]) {
          messages.push(fieldErrors[errorKey]);
        }
      }
    }
    return messages;
  }
}
