import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
  selector: 'app-componente12',
  standalone: true,
  imports: [CommonModule, MediaPipe],
  templateUrl: './componente12.component.html',
  styleUrl: './componente12.component.css'
})
export class Componente12Component {

  nome: string = "Evandro";

  obj: any = {'nome': 'Evandro', 'idade': 24};

  alunos: any = [
    {'nome': 'Evandro', 'nota1': 8, 'nota2': 9},
    {'nome': 'Ralf', 'nota1': 3, 'nota2': 6},
    {'nome': 'Jonas', 'nota1': 5, 'nota2': 7},
    {'nome': 'Isabela', 'nota1': 6, 'nota2': 8}
  ];
}
