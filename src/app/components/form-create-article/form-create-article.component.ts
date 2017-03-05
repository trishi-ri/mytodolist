import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";

@Component({
  selector: 'form-create-article',
  templateUrl: 'form-create-article.component.html',
  styleUrls: ['form-create-article.component.css']
})
export class FormCreateArticleComponent{

  myForm: FormGroup;
  link: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'title': [''],
      'link': ['', Validators.required]
    });
    this.link = this.myForm.controls['link'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
