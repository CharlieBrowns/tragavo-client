import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './components/perfil/perfil.component';

import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,

  ],
  exports: [
    AccountRoutingModule
  ]
})

export class AccountModule { }
