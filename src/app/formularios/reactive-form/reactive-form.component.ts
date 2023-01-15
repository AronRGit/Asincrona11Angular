import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formSubmitted = false;
  mensajevalido : boolean = false;
constructor(private formBuilder: FormBuilder) { }
  contactForm = this.formBuilder.group({
    nombre: ['',{validators: [Validators.required, Validators.pattern('.{10,}')]}],
    email: ['', {validators: [Validators.required, Validators.email]}],
    mensaje: ['',{validators: [Validators.required, Validators.pattern('.{1,500}')]}]
  });

  get nombre() { return this.contactForm.get('nombre'); }
  get email() { return this.contactForm.get('email'); }
  get mensaje() { return this.contactForm.get('mensaje'); }

  ngOnInit() {
    
  }
  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      this.mensajevalido = true;
    } else {
      this.mensajevalido = false;
    }
  }

}
