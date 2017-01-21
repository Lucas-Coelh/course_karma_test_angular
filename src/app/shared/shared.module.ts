/**
 * Arquivo de configuração do módulo compartilhado.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { 
  KzCepPipe,
  KzCpfPipe,
  KzCnpjPipe,
  KzCpfCnpjPipe,
  KzCpfValidatorDirective,
  KzCnpjValidatorDirective, 
  KzCpfCnpjValidatorDirective,
  ModalUtilComponent,
  KzPaginacaoComponent
} from './';

@NgModule({
  imports:      [ 
  	CommonModule,
  	FormsModule 
  ],
  declarations: [ 
  	KzCepPipe,
  	KzCpfPipe,
  	KzCnpjPipe,
  	KzCpfCnpjPipe,
  	KzCpfValidatorDirective,
  	KzCnpjValidatorDirective, 
  	KzCpfCnpjValidatorDirective,
  	ModalUtilComponent,
  	KzPaginacaoComponent
  ],
  exports: [ 
  	KzCepPipe,
  	KzCpfPipe,
  	KzCnpjPipe,
  	KzCpfCnpjPipe,
  	KzCpfValidatorDirective,
  	KzCnpjValidatorDirective, 
  	KzCpfCnpjValidatorDirective,
  	ModalUtilComponent,
  	KzPaginacaoComponent,
    CommonModule, 
    FormsModule 
  ]
})
export class SharedModule {}