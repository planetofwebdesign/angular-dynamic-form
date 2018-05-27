import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent } from './container/dynamic-form/dynamic-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { AppMaterialModule } from '../angular-material.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AppMaterialModule
    ],
    declarations: [
        DynamicFormComponent,
        FormInputComponent,
        FormSelectComponent,
        FormButtonComponent,
        DynamicFieldDirective
    ],
    exports: [DynamicFormComponent],
    entryComponents: [
        FormInputComponent,
        FormSelectComponent,
        FormButtonComponent,
    ]
})
export class DynamicFormModule { }
