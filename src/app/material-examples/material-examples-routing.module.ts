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
import {FormsExampleComponent} from './forms-example/forms-example.component';
import {FormExtrasComponent} from './form-extras/form-extras.component';
import {MainNavigationComponent} from './main-navigation/main-navigation.component';
import {ContactsComponent} from '../components/contacts/contacts.component';
import {ProjectsComponent} from '../components/projects/projects.component';
import {TasksComponent} from '../components/tasks/tasks.component';

const routes: Routes = [

  {
    path: '',
    component: MainNavigationComponent,
    children: [
      {path: 'contacts', component: ContactsComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'tasks', component: TasksComponent}
    ]
  },
  {
    path: 'examples',
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
      },
      {
        path: 'forms', component: FormsExampleComponent
      },
      {
        path: 'forms-extras', component: FormExtrasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialExamplesRoutingModule { }
