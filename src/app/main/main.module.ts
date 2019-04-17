import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiefComponent } from './components/chief/chief.component';
import { MainRoutingModule } from './main-routing.module';
import { UserSideComponent } from './components/user-side/user-side.component';
@NgModule({
  declarations: [ChiefComponent, UserSideComponent],
  imports: [
    CommonModule
  ],
  exports : [
    MainRoutingModule
  ],
})
export class MainModule { }
