import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form/container/dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';
import { FieldConfig, ButtonType } from './dynamic-form/models/field-config.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  constructor(private cdr: ChangeDetectorRef) {}
  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: [{
        id: 1,
        name: 'Pizza'
      }, {
        id: 2,
        name: 'Hot Dogs'
      }],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
      buttonType: ButtonType.submit
    }
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
    this.form.setValue('name', 'Todd Motto');
    this.cdr.detectChanges();
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }


}
