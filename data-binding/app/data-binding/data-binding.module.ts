import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingComponent }   from './data-binding.component';

@NgModule({
    imports: [CommonModule],
    exports: [DataBindingComponent],
    declarations: [DataBindingComponent],
    providers: [],
})
export class DataBindingModule { }
