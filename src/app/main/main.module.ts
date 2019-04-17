import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiefComponent } from './components/chief/chief.component';
import { MainRoutingModule } from './main-routing.module';
import { UserSideComponent } from './components/user-side/user-side.component';
import { MainOptionsComponent } from './components/main-options/main-options.component';
import { BreakingNewsComponent } from './components/breaking-news/breaking-news.component';
import { ExtraComponent } from './components/extra/extra.component';
@NgModule({
  declarations: [ChiefComponent, UserSideComponent, MainOptionsComponent, BreakingNewsComponent, ExtraComponent],
  imports: [
    CommonModule
  ],
  exports : [
    MainRoutingModule
  ],
})
export class MainModule { }
