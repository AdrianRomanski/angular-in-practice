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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IndicatorsExampleComponent } from './indicators-example/indicators-example.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import { InteractionsExampleComponent } from './interactions-example/interactions-example.component';
import { ToolbarsExampleComponent } from './toolbars-example/toolbars-example.component';
import { ListsExampleComponent } from './pages/lists-example/lists-example.component';
import { SimpleContactsListComponent } from './simple-contacts-list/simple-contacts-list.component';
import { AppContactDetailsListComponent } from './app-contact-details-list/app-contact-details-list.component';
import { ContactSelectionListComponent } from './contact-selection-list/contact-selection-list.component';
import { FormsExampleComponent } from './forms-example/forms-example.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FormExtrasComponent } from './form-extras/form-extras.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';


@NgModule({
  declarations: [LayoutComponent, DashboardExampleComponent,
    TableExampleComponent, AddressformExampleComponent, IndicatorsExampleComponent,
    InteractionsExampleComponent, ToolbarsExampleComponent, ListsExampleComponent,
    SimpleContactsListComponent, AppContactDetailsListComponent, ContactSelectionListComponent,
    FormsExampleComponent,
    FormExtrasComponent,
    MainNavigationComponent],
  exports: [
    ContactSelectionListComponent,
    AppContactDetailsListComponent
  ],
  imports: [
    CommonModule,
    MaterialExamplesRoutingModule,
    LayoutModule,
    MatCheckboxModule,
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
    MatToolbarModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule
  ]
})
export class MaterialExamplesModule { }
