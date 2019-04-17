import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ChiefComponent } from '../main/components/chief/chief.component';
const routes: Routes = [
    {
        path: '',
        component: ChiefComponent
    }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class MainRoutingModule {}