import {Component, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from "@angular/forms";

@Component({
  selector: 'form-create-article',
  templateUrl: 'form-create-article.component.html',
  styleUrls: ['form-create-article.component.css']
})
export class FormCreateArticleComponent {
  @Output()
  onArticleValid: EventEmitter<{[key: string]: string}>;

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

    this.onArticleValid = new EventEmitter();
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
    this.onArticleValid.emit({'title': this.title, 'link': this.link.value});
  }

}

function linkValidator(control: FormControl): {[s: string]: boolean} {
  if (!control.value.match(/^http/)) {
    return {invalidLink: true};
  }
}
