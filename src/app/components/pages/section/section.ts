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
    { id: 1, dia: '08', descricao: 'Nubank Zel', valor: '1.430,90', pago: true },
    { id: 2, dia: '10', descricao: 'Água Sabesp', valor: '145,56', pago: false },
    { id: 3, dia: '10', descricao: 'Fies', valor: '181,89', pago: false },
    { id: 4, dia: '12', descricao: 'Aluguel', valor: '759,08', pago: false },
    { id: 5, dia: '15', descricao: 'C6 Bank', valor: '0,00', pago: false },
    { id: 6, dia: '15', descricao: 'Hipercard', valor: '2.153,60', pago: false },
    { id: 7, dia: '15', descricao: 'Magazine', valor: '72,09', pago: false },
    { id: 8, dia: '20', descricao: 'Nubank Gil', valor: '2.153,60', pago: false },
    { id: 9, dia: '20', descricao: 'Internet', valor: '99,90', pago: false },
    { id: 10, dia: '24', descricao: 'Luz Enel', valor: '250,00', pago: false },
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
