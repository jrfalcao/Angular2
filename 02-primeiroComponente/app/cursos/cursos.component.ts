import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
	moduleId: module.id,
	selector: 'cursos-lista',
	/*template: `
		
	`*/
	templateUrl: 'cursos.component.html',
	providers: [CursosService]
})

export class CursosComponent {

	nome = 'Junior Falcão';

	cursos = [''];

	constructor(cursosService: CursosService){
		this.cursos = cursosService.getCursos();
	}

}