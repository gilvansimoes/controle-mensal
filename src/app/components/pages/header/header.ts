import { Component } from '@angular/core';
import { Indicador } from "../indicador/indicador";
import { Modal } from "../modal/modal";

import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-header',
  imports: [Indicador, Modal],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  isModalVisible: boolean = false;

  abre(event: boolean) {
    this.isModalVisible = event;
  }
  recebe(event: boolean) {
    this.isModalVisible = event;
  }

  constructor(private modalService: ModalService) {}
  ngOnInit() {
    this.modalService.modalSaldo$.subscribe(() => {
      this.abre(true);
    })
  }
}
