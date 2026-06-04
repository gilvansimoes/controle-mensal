import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {
  @Input() ocultarMenu = false;

  sidebarHidden = false;

  toggleSidebarHidden() {
    this.sidebarHidden = !this.sidebarHidden;
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('hidden');
    }
  }
    constructor(private modalService: ModalService){}

    abrirModalSaldo() {
      this.modalService.abrirModalSaldo();
      this.toggleSidebarHidden();
    }
    abrirModalGasto() {
      this.modalService.abrirModalGasto();
      this.toggleSidebarHidden();
    }
    abrirModalLogin() {
      this.modalService.abrirModalLogin();
      this.toggleSidebarHidden();
    }
}
