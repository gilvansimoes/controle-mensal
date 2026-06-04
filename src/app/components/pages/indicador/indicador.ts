import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-indicador',
  imports: [NgClass],
  templateUrl: './indicador.html',
  styleUrl: './indicador.css',
})
export class Indicador {
  @Input() isVisible?: boolean;
  @Input() texto: string = '';
  @Input() valor: number | string = '';
  @Input() classeDiv: string = '';
  @Input() classImg: string = '';
  @Output() open = new EventEmitter<boolean>();

  openModal(): void{
    this.isVisible = true;
    this.open.emit(this.isVisible);
  }
}
