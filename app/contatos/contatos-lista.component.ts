import { Component, OnInit } from '@angular/core';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';
import { DialogService } from './../dialog.service';

@Component({
	moduleId: module.id,
	selector: 'contatos-lista',
	templateUrl: 'contatos-lista.component.html'
})
export class ContatosListaComponent {

	contatos: Contato[] = [];
	mensagem: {};
	classesCss: {};
	private currentTimeout: any;

	constructor(
		private contatoService: ContatoService,
		private dialogService: DialogService
	) {}

	ngOnInit(): void {
		this.contatoService.getContatos()
			.then((contatos: Contato[]) => {
				this.contatos = contatos;
			}).catch(err => {
				console.log(err);
				this.mostrarMensagem({
					tipo: 'danger',
					texto: 'Houve um erro ao buscar a lista de contatos!'
				});
			});
	}

	onDelete(contato: Contato): void {
		this.dialogService.confirm('Deseja remover o contato ' + contato.nome + '?')
			.then((canDelete: boolean) => {

				if(canDelete) {
					
					this.contatoService
						.delete(contato)
						.then(() => {
							this.contatos = this.contatos.filter((c: Contato) => c.id != contato.id);
							this.mostrarMensagem({
								tipo: 'success',
								texto: 'Contato removido!'
							});
						}).catch(err => {
							console.log(err);
							this.mostrarMensagem({
								tipo: 'danger',
								texto: 'Houve um erro ao tentar remover o contato!'
							});
						});

				}

			});
	}

	private mostrarMensagem(mensagem: {tipo: string, texto: string}): void {
		this.mensagem = mensagem;
		this.montarClasses(mensagem.tipo);
		if (mensagem.tipo != 'danger') {

			if (this.currentTimeout) {
				clearTimeout(this.currentTimeout);
			}
			this.currentTimeout = setTimeout(() => {
				this.mensagem = undefined;
			}, 3000);
			
		}
	}

	private montarClasses(tipo: string): void {
		this.classesCss = {
			'alert': true
		};
		this.classesCss['alert-' + tipo] = true;
	}

}