import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente15-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente15-formulario.component.html',
  styleUrl: './componente15-formulario.component.css'
})
export class Componente15FormularioComponent {

  nome: string = '';

  @Output() funcao = new EventEmitter<string>();

  cadastrarNome() {
    this.funcao.emit(this.nome);
  }

}
