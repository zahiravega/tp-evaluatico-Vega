import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  cols: number = 3;  // Número de columnas por defecto

  constructor() {
    this.adjustGridCols(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustGridCols(event.target.innerWidth);
  }

  adjustGridCols(width: number) {
    if (width <= 600) {
      this.cols = 1;  // 1 columna en pantallas pequeñas
    } else if (width > 600 && width <= 960) {
      this.cols = 2;  // 2 columnas en pantallas medianas
    } else {
      this.cols = 3;  // 3 columnas en pantallas grandes
    }
  }
}
