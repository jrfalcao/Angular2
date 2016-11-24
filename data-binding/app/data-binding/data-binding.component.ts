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

    conteudoAtual: string;

    getValor(){
        return 1;
    }
    onClick(){
        alert("Você clicou no botão!");
    }
    onKeyup(event:KeyboardEvent){
        console.log(event);
        this.conteudoAtual = (<HTMLInputElement>event.target).value;//event.target.value "pode ser utilizado assim sem cast"
    }
}