import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { EChiefComponent } from './components/e-chief/e-chief.component';

const routes : Routes = [
    {
        path: '',
        component: EChiefComponent
    }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class EventsRoutingModule {}