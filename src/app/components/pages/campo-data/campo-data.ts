import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Modal } from "../modal/modal";

import { ModalService } from '../../../../services/modal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-campo-data',
  imports: [Modal, CommonModule, FormsModule],
  templateUrl: './campo-data.html',
  styleUrl: './campo-data.css',
})
export class CampoData {
  isModalVisible: boolean = false;
  dataAtual: string = '';

  abre(event: boolean) {
    this.isModalVisible = event;
  }
  recebe(event: boolean) {
    this.isModalVisible = event;
  }

  constructor(private modalService: ModalService) {}
  ngOnInit() {
    this.modalService.modalGasto$.subscribe(() => {
      this.abre(true);
    })

    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    this.dataAtual = `${ano}-${mes}`;
  }
}
