import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  public titulo = "Professores";
  public profSelecionado: Professor;

  public professores = [
    {id: 1, nome: "Paulo", disciplina: 'Matemática'},
    {id: 2, nome: "José", disciplina: 'Física'},
    {id: 3, nome: "Ronaldo", disciplina: 'Português'},
    {id: 4, nome: "Rodrigo", disciplina: 'Inglês'},
    {id: 5, nome: "Alexandre", disciplina: 'Programação'}
  ];
  constructor() { }

  profSelect(prof: Professor){
    this.profSelecionado = prof;
  }

  voltar(){
    this.profSelecionado = null;
  }

  ngOnInit() {
  }

}
