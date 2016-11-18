import { Component } from '@angular/core';

import { PrimeiroComponent } from './primeiro/primeiro.component';
import { CursosComponent } from './cursos/cursos.component';
@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Ola Mundo!</p>
        <primeiro-componente></primeiro-componente>
        <cursos-lista></cursos-lista>
    `,
    directives:[PrimeiroComponent, CursosComponent]
    
})
export class AppComponent { }
