import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  imagem: string = 'assets/image1.jpg';

  alterarImagem() {
    if (this.imagem === 'assets/image1.jpeg') {
      this.imagem = 'assets/image2.jpeg';
    }
    else {
      this.imagem = 'assets/image1.jpeg';
    }
  }
}

