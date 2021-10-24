import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialExamplesRoutingModule } from './material-examples-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardExampleComponent } from './pages/dashboard-example/dashboard-example.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TableExampleComponent } from './pages/table-example/table-example.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AddressformExampleComponent } from './pages/addressform-example/addressform-example.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { IndicatorsExampleComponent } from './indicators-example/indicators-example.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import { InteractionsExampleComponent } from './interactions-example/interactions-example.component';
import { ToolbarsExampleComponent } from './toolbars-example/toolbars-example.component';
import { ListsExampleComponent } from './pages/lists-example/lists-example.component';
import { SimpleContactsListComponent } from './simple-contacts-list/simple-contacts-list.component';
import { AppContactDetailsListComponent } from './app-contact-details-list/app-contact-details-list.component';
import { ContactSelectionListComponent } from './contact-selection-list/contact-selection-list.component';


@NgModule({
  declarations: [LayoutComponent, DashboardExampleComponent,
    TableExampleComponent, AddressformExampleComponent, IndicatorsExampleComponent, InteractionsExampleComponent, ToolbarsExampleComponent, ListsExampleComponent, SimpleContactsListComponent, AppContactDetailsListComponent, ContactSelectionListComponent],
  imports: [
    CommonModule,
    MaterialExamplesRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTooltipModule,
    MatToolbarModule
  ]
})
export class MaterialExamplesModule { }
