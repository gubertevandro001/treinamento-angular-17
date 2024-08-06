import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';
import { ProdutoService } from '../servico/produto.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {

  vetor: Produto[] = [];

  btnCadastrar: boolean = true;

  formulario = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(''),
    valor: new FormControl(null)
  })

  constructor(private servico: ProdutoService) {}

  ngOnInit() {
    this.selecionar();
  }

  selecionar() {
    this.servico.selecionar().subscribe(retorno => {this.vetor = retorno});
  }

  cadastrar() {
    if(this.verificaProdutoMesmoNome(this.formulario.value.nome)) {
      alert("Já existe um produto com este nome, não é possível cadastrar");
    }
    else {
      this.servico.cadastrar(this.formulario.value as Produto)
    .subscribe(retorno => {
      this.vetor.push(retorno);
      this.formulario.reset();
    });
    }
  }

  selecionarProduto(indice: number) {
    this.formulario.setValue({
      id: this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor
    });

    this.btnCadastrar = false;
  }

  alterar() {
    this.servico.alterar(this.formulario.value as Produto)
    .subscribe(retorno => {
      let indiceAlterado = this.vetor.findIndex(obj => {
        return this.formulario.value.id = obj.id
      });

      this.vetor[indiceAlterado] = retorno;

      this.formulario.reset();

      this.btnCadastrar = true;
    })
  }

  remover() {
    this.servico.remover(this.formulario.value.id)
    .subscribe(() => {
      let indiceRemovido = this.vetor.findIndex(obj => {
        return obj.id === this.formulario.value.id;
      });

      this.vetor.splice(indiceRemovido, 1);

      this.formulario.reset();

      this.btnCadastrar = true;
    });
  }

  verificaProdutoMesmoNome(nomeProduto: string): any {
    this.vetor.filter(obj => {
      if (obj.nome = nomeProduto) {
        return true;
      }
      return false;
    })
  }
}
