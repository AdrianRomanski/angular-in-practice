import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {DashboardExampleComponent} from './pages/dashboard-example/dashboard-example.component';
import {TableExampleComponent} from './pages/table-example/table-example.component';
import {AddressformExampleComponent} from './pages/addressform-example/addressform-example.component';
import {IndicatorsExampleComponent} from './indicators-example/indicators-example.component';
import {InteractionsExampleComponent} from './interactions-example/interactions-example.component';
import {ToolbarsExampleComponent} from './toolbars-example/toolbars-example.component';
import {ListsExampleComponent} from './pages/lists-example/lists-example.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', component: DashboardExampleComponent
      },
      {
        path: 'table', component: TableExampleComponent
      },
      {
        path: 'address-form', component: AddressformExampleComponent
      },
      {
        path: 'indicators', component: IndicatorsExampleComponent
      },
      {
        path: 'interactions', component: InteractionsExampleComponent
      },
      {
        path: 'toolbars', component: ToolbarsExampleComponent
      },
      {
        path: 'lists', component: ListsExampleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialExamplesRoutingModule { }
