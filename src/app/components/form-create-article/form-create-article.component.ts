import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'form-create-article',
  templateUrl: 'form-create-article.component.html',
  styleUrls: ['form-create-article.component.css']
})
export class FormCreateArticleComponent{

  myForm: FormGroup;
  title: string;
  link: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'title': ['', Validators.required],
      'link': ['', Validators.compose([
        Validators.required, linkValidator
      ])]
    });
    this.link = this.myForm.controls['link'];

    this.link.valueChanges.subscribe(
      (value: string) => {
        console.log('link changed to: ', value);
      }
    );
    this.myForm.valueChanges.subscribe(
      (form: string) => {
        console.log('form changed to: ', form);
      }
    );
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}

function linkValidator(control: FormControl): { [s: string]: boolean} {
  if (!control.value.match(/^http/)){
    return {invalidLink: true};
  }
}
