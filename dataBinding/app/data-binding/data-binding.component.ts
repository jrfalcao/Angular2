import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'data-binding',
    templateUrl: 'data-binding.component.html',
})
export class DataBindingComponent {
    teste = 'Teste de valor retornado por interpolação';
    srcImg = 'http://lorempixel.com/400/200/city';
    constructor() { }
    getValor(){
        return 1;
    }

}