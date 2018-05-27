import { Component, OnInit } from '@angular/core';
import { FieldConfig, ButtonType } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;
  buttonType: string;
  constructor() { }

  ngOnInit() {
    this.buttonType = ButtonType[this.config.buttonType];
  }

}
