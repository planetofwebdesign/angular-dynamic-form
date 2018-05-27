import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form/container/dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';
import { FieldConfig, ButtonType, SelectboxOption } from './dynamic-form/models/field-config.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  constructor(private cdr: ChangeDetectorRef) { }

  fileTypes: SelectboxOption[] = [
    {
      id: 1,
      name: 'Excel'
    },
    {
      id: 2,
      name: 'Doc'
    }
  ];
  config: FieldConfig[];
  excelFileConfig: FieldConfig[] = [
    {
      label: 'Download sample file',
      name: 'downloadFile',
      type: 'button',
      // parentCls: 'd-flex flex-column',
      buttonType: ButtonType.button
    },
    {
      type: 'input',
      label: 'File name',
      name: 'name',
      placeholder: 'Enter your name',
      parentCls: 'd-flex flex-column',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
      parentCls: 'd-flex flex-column',
      buttonType: ButtonType.submit
    }
  ];


  docFileConfig: FieldConfig[] = [
    {
      type: 'select',
      label: 'Favourite File',
      parentCls: 'd-flex flex-column',
      name: 'file',
      options: [{
        id: 1,
        name: 'Exam'
      }, {
        id: 2,
        name: 'Test'
      }],
      // placeholder: 'Select an option'
      validation: [Validators.required]
    }, {
      type: 'input',
      label: 'File name',
      name: 'name',
      parentCls: 'd-flex flex-column',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      label: 'Submit',
      name: 'submit',
      parentCls: 'd-flex flex-column',
      type: 'button',
      buttonType: ButtonType.submit
    }
  ];

  ngAfterViewInit() {
    // if (this.form) {
    //   let previousValid = this.form.valid;
    //   this.form.changes.subscribe(() => {
    //     if (this.form.valid !== previousValid) {
    //       previousValid = this.form.valid;
    //       this.form.setDisabled('submit', !previousValid);
    //     }
    //   });

    // }
    // this.form.setDisabled('submit', true);
    // this.form.setValue('name', 'Todd Motto');
    // this.cdr.detectChanges();
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }


  loadForm(value: any) {
    if (value.id === 1) {
      this.config = this.excelFileConfig;
    } else {
      this.config = this.docFileConfig;
    }

  }


}
