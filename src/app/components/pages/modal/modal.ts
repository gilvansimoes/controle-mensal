import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Table } from '../table/table';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, FormsModule, Table, CurrencyMaskModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  descricao: string = '';
  valor: string = '';
  dia: string = '';
  usuario: string = '';
  senha: string = '';

  colunas = [
    { chave: 'descricao', titulo: 'Descrição', tipo: 'texto' },
    { chave: 'valor', titulo: 'Valor', tipo: 'moeda' },
    { chave: 'editar', titulo: 'Editar', tipo: 'botao' },
  ];
  dados = [
    { id: 1, descricao: 'Mãe', valor: '2.500,00' },
    { id: 2, descricao: 'Pai', valor: '2.500,00' },
  ];

  @Input() tipoExibicao: 'table' | 'formulario' | 'login' = 'table';
  @Input() isVisible?: boolean;
  @Input() isMVisible?: boolean;
  @Input() dadosEquip?: any[];
  @Output() close = new EventEmitter<boolean>();

  dias: number[] = Array.from({ length: 31 }, (_, i) => i + 1);

  closeModal(): void {
    this.isVisible = false;
    this.close.emit(this.isVisible);
    this.descricao = '';
    this.valor = '';
  }

  salvarSaldo(): void {
    if (this.descricao && this.valor && this.dia) {
      const novoSaldo = {
        //id: this.dados.length + 1,
        descricao: this.descricao,
        valor: this.valor,
        dia: this.dia,
      };
      //console.log(novoSaldo);
      //this.dados.push(novoSaldo);
      //this.closeModal();
    }
  }

  salvarGasto(): void {
    if (this.descricao && this.valor && this.dia) {
      const novoGasto = {
        //id: this.dados.length + 1,
        descricao: this.descricao,
        valor: this.valor,
        dia: this.dia,
      };
      //console.log(novoGasto);
      //this.dados.push(novoGasto);
      //this.closeModal();
    }
  }

  registro() {
    /*let filtroEdit: any[] | undefined  = this.dadosTable?.filter((equipSel) => equipSel.id === item.id);
    if (!filtroEdit || filtroEdit.length === 0) {
      return;
    }*/
    const Toast = Swal.mixin({
      toast: true,
      icon: 'success',
      title: 'Busca realizada com sucesso!',
      showCloseButton: true,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Salvar',
      denyButtonText: 'Não',
      backdrop: 'rgba(0, 0, 0, 0.2)',
    });
    Toast.fire({
      icon: 'info',
      title: 'Registro!',
      width: '100%',
      html: `
        <style>
          .h3_1 {
            font-size: 14px;
            font-weight: bold;
            margin-right: 5px;                 }
          .h3_2 {
            font-size: 16px;
            font-weight: normal;
            border: none;
            padding-left: 5px;
            box-shadow: 0px 0px 4px 0px gray;
            border-radius: 3px;
            outline: none;
            width: 75%;
          }
          .second {
            display: flex;
            margin-bottom: 5px;
            margin-right: 5px;
            justify-content: end;
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
            display: flex;
          }
          .principal-registro {
            width: 50%;
          }
          .principalRegistro-Center {
            display: flex;
            justify-content: center;
          }
          .swal2-actions {
            display: flex;
            justify-content: center;
          }
          swal2-toast-shown swal2-shown > [aria-hidden='true'] {
            transition: 0.1s filter;
            filter: blur(3px);
          }
          .swal2-container {
            backdrop-filter: blur(7px);
            -webkit-backdrop-filter: blur(7px);
          }
          .senha-container {
            position: relative;
            width: 76%;
          }
          .senha-container .h3_2 {
            width: 100%;
            padding-right: 35px;
            box-sizing: border-box;
          }
          .olho {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            user-select: none;
          }
          .senha-status {
            text-align: center;
          }
          @media screen and (width <= 768px) {
            .principal-registro {
              width: 100%;
            }
            .h3_2 {
              width: 55%;
            }
            .senha-container {
              width: 56.5%;
            }
          }
        </style>
        <div class="principalRegistro-Center">
          <div class="principal-registro">
            <div class="second">
              <label class="h3_1">Nome:</label>
              <input type="text" class="h3_2" value="" required focus></input>
            </div>
            <div class="second">
              <label class="h3_1">Usuário:</label>
              <input type="text" class="h3_2" value="" required></input>
            </div>
            <div class="second">
              <label class="h3_1">E-mail:</label>
              <input type="email" class="h3_2" value="" required></input>
            </div>
            <div class="second">
              <label class="h3_1 senha">Senha:</label>
              <div class="senha-container">
                <input type="password" class="h3_2 senha-input" value="" required><span class="olho olho-senha">👁️</span></input>
              </div>
            </div>
            <div class="second">
              <label class="h3_1 confirmar-senha">Confirmar Senha:</label>
              <div class="senha-container">
                <input type="password" class="h3_2 confirmar-senha-input" value="" required><span class="olho olho-confirmar">👁️</span></input>
              </div>
            </div>
            <div class="senha-status"></div>
          </div>
        </div>
      `,
      preConfirm: () => {
        const inputs = document.querySelectorAll('.principal-registro input');

        for (const input of inputs) {
          const campo = input as HTMLInputElement;

          if (!campo.value.trim()) {
            campo.focus();

            Swal.showValidationMessage('Todos os campos são obrigatórios');

            return false;
          }
        }
        const email = (inputs[2] as HTMLInputElement).value.trim();

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(email)) {
          (inputs[2] as HTMLInputElement).focus();

          Swal.showValidationMessage('Digite um e-mail válido');

          return false;
        }

        const senha = document.querySelector('.senha-input') as HTMLInputElement;
        const confirmar = document.querySelector('.confirmar-senha-input') as HTMLInputElement;

        if (senha.value !== confirmar.value) {
          Swal.showValidationMessage('As senhas devem ser iguais');

          return false;
        }

        return true;
      },
      didOpen: () => {
        const senha = document.querySelector('.senha-input') as HTMLInputElement;
        const confirmar = document.querySelector('.confirmar-senha-input') as HTMLInputElement;
        const status = document.querySelector('.senha-status') as HTMLElement;

        const validarSenhas = () => {
          if (!senha.value && !confirmar.value) {
            senha.style.border = '1px solid #ccc';
            confirmar.style.border = '1px solid #ccc';

            status.textContent = '';
            return;
          }

          if (senha.value === confirmar.value) {
            senha.style.border = '2px solid green';
            confirmar.style.border = '2px solid green';

            /*status.textContent = '✓ Senhas coincidem';
            status.style.color = 'green';*/
          } else {
            senha.style.border = '2px solid red';
            confirmar.style.border = '2px solid red';

            /*status.textContent = '✗ Senhas diferentes';
            status.style.color = 'red';*/
          }
        };

        senha.addEventListener('input', validarSenhas);
        confirmar.addEventListener('input', validarSenhas);

        validarSenhas();

        document.querySelectorAll('.olho').forEach((icone) => {
          icone.addEventListener('click', () => {
            const container = (icone as HTMLElement).parentElement;
            const input = container?.querySelector('input') as HTMLInputElement;

            if (input.type === 'password') {
              input.type = 'text';
              (icone as HTMLElement).textContent = '🙈';
            } else {
              input.type = 'password';
              (icone as HTMLElement).textContent = '👁️';
            }
          });
        });
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const principalDiv = document.querySelector('.principal-registro') as HTMLElement;
        const inputs = principalDiv.querySelectorAll('input');
        const senha = (inputs[3] as HTMLInputElement).value;
        const confirmarSenha = (inputs[4] as HTMLInputElement).value;
        if (senha !== confirmarSenha) {
          Swal.fire({
            icon: 'error',
            title: 'Senhas diferentes',
            text: 'Os campos de senha devem ser iguais.',
          });
          return;
        }
        const dados = {
          nome: (inputs[0] as HTMLInputElement).value,
          usuario: (inputs[1] as HTMLInputElement).value,
          email: (inputs[2] as HTMLInputElement).value,
          senha: senha,
        };
        console.log(dados);
      }
      /*this.equipServ.atualizarEquipamento(dados).subscribe*/ ({
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
    });
  }
}
