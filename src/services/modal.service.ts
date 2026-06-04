import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalSaldo$ = new Subject<void>();
  modalGasto$ = new Subject<void>();
  modalLogin$ = new Subject<void>();

  abrirModalSaldo() {
    this.modalSaldo$.next();
  }
  abrirModalGasto() {
    this.modalGasto$.next();
  }
  abrirModalLogin() {
    this.modalLogin$.next();
  }
}
