import { Component } from '@angular/core';
import { Table } from '../table/table';
import { Modal } from '../modal/modal';

import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-section',
  imports: [Table, Modal],
  templateUrl: './section.html',
  styleUrl: './section.css',
})
export class Section {
  isModalVisible: boolean = false;

  dados = [
    { id: 1, dia: '01', descricao: 'Energia', valor: '230,00', pago: false },
    { id: 2, dia: '06', descricao: 'Agua', valor: '120,00', pago: true },
    { id: 3, dia: '11', descricao: 'Intenet', valor: '99,00', pago: false },
    { id: 4, dia: '16', descricao: 'Cartao', valor: '1.300,00', pago: false },
    { id: 5, dia: '21', descricao: 'Aluguel', valor: '851,00', pago: false },
    { id: 6, dia: '26', descricao: 'Lazer', valor: '1.000,00', pago: true },
  ];
  colunas = [
    { chave: 'dia', titulo: 'Dia', tipo: 'data' },
    { chave: 'descricao', titulo: 'Descrição', tipo: 'texto' },
    { chave: 'valor', titulo: 'Valor', tipo: 'moeda' },
    { chave: 'pago', titulo: 'Pago', tipo: 'checkbox' },
    { chave: 'editar', titulo: 'Editar', tipo: 'botao' },
  ];

  constructor(private modalService: ModalService) {}
  ngOnInit() {
    this.modalService.modalLogin$.subscribe(() => {
      this.abre(true);
    });
  }
  abre(event: boolean) {
    this.isModalVisible = event;
  }
  recebe(event: boolean) {
    this.isModalVisible = event;
  }
}
