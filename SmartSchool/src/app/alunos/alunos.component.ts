import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';
  public alunoSelecionado: string;

  public alunos = [
    { id:1, nome: 'Marta', sobrenome: 'Kent', telefone : 332255465 },
    { id:2, nome: 'Laura', sobrenome: 'Isabela', telefone : 332255465 },
    { id:3, nome: 'Paula', sobrenome: 'Antonio', telefone : 3322555465 },
    { id:4, nome: 'Luiza', sobrenome: 'Maria', telefone : 33225565 },
    { id:5, nome: 'Lucas', sobrenome: 'Machado', telefone : 33225545 },
    { id:6, nome: 'Pedro', sobrenome: 'Alvarez', telefone : 332255546 },
    { id:7, nome: 'Paulo', sobrenome: 'José', telefone : 3322555465 }
  ];
  
  alunoSelect(aluno: any){
    this.alunoSelecionado = aluno.nome;
  }

  voltar(){
    this.alunoSelecionado = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
