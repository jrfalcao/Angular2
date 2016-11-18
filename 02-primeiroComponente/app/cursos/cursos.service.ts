import {Injectable} from '@angular/core';

@Injectable()
export class CursosService {

	getCursos(){
		return ['Angular 2', 'PHP', 'Java', 'JavaScript', 'HTML 5']
	}
}