import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  @Input() colunas: { chave: string; titulo: string; tipo: string }[] = [];
  @Input() dadosTable?: any[];
  @Input() categoria: string = '';
  @Input() tipo: string = '';

  editar(item: any, tipo: string) {
    let filtroEdit: any[] | undefined  = this.dadosTable?.filter((equipSel) => equipSel.id === item.id);
      
      if (!filtroEdit || filtroEdit.length === 0) {
        return;
      }
      const Toast = Swal.mixin({
        toast: true,
        icon: 'success',
        title: 'Busca realizada com sucesso!',
        showCloseButton: true,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Salvar',
        denyButtonText: 'Não',
        backdrop: 'rgba(0, 0, 0, 0.2)'
      });
      Toast.fire({
        icon: 'info',
        title: 'Edição!',
        width: '100%',
        html: `
            <style>
              .h3_1 {
                font-size: 14px;
                font-weight: bold;
              }
              .h3_2 {
                font-size: 16px;
                font-weight: normal;
                border: none;
                padding-left: 5px;
                box-shadow: 0px 0px 4px 0px gray;
                border-radius: 3px;
                outline: none;
              }
              .second {
                display: flex;
                margin-bottom: 5px;
                margin-right: 5px;
                justify-content: space-between;
              }
              .swal2-icon, .swal2-close {
                position: absolute;
                top: -10px;
              }
              .swal2-title {
                text-align: center !important;
              }
              .swal2-toast div:where(.swal2-html-container) {
                margin: .5em -12px;
              }
              .swal2-container {
                backdrop-filter: blur(7px);
                -webkit-backdrop-filter: blur(7px);
              }
            </style>
            <div class="principal ${tipo}">
            <div class="second" ${filtroEdit[0].dia === undefined ? 'style="display: none;"' : ''}>
              <label class="h3_1">Dia:</label>
              <input type="text" class="h3_2" value="${filtroEdit[0].dia}"></input>
            </div>
              <div class="second" ${filtroEdit[0].descricao === undefined ? 'style="display: none;"' : ''}>
                <label class="h3_1">Descrição:</label>
                <input type="text" class="h3_2" value="${filtroEdit[0].descricao}"></input>
              </div>
              <div class="second" ${filtroEdit[0].valor === undefined ? 'style="display: none;"' : ''}>
                <label class="h3_1">Valor:</label>
                <input type="text" class="h3_2" value="${filtroEdit[0].valor}"></input>
              </div>
              <div class="second" ${filtroEdit[0].pago === undefined ? 'style="display: none;"' : ''}>
                <label class="h3_1">Pago:</label>
                <input type="checkbox" class="h3_2" ${filtroEdit[0].pago ? 'checked' : ''}></input>
              </div>
            </div>  
            `,
      }).then((result) => {
        if (result.isConfirmed) {
          const principalDiv = document.querySelector(`.${this.tipo}`) as HTMLElement;
          const inputs = principalDiv.querySelectorAll('input');
  
          if(this.tipo === 'gastos') {
            const dados = {
                id: item.id,
                dia: inputs[0]?.value || filtroEdit[0].dia,
                descricao: inputs[1]?.value || filtroEdit[0].descricao,
                valor: inputs[2]?.value || filtroEdit[0].valor,
                pago: (inputs[3] as HTMLInputElement)?.checked ?? filtroEdit[0].pago,
              };
          } else {
            const dados = {
              id: item.id,
              descricao: inputs[1]?.value || filtroEdit[0].descricao,
              valor: inputs[2]?.value || filtroEdit[0].valor,
            };
          }
/*this.equipServ.atualizarEquipamento(dados).subscribe*/({
            next: () => {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Dados salvos com sucesso',
                showConfirmButton: false,
                timer: 1500,
              });
              //this.busca();
            },
            error: (err: any) => {
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Erro ao salvar dados',
                text: err.message || 'Erro desconhecido',
                showConfirmButton: true,
              });
            },
          });
        }
      });
  }
}
