import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SearchComponent } from './components/search/search.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchRoutingModule } from './search-routing.module';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchFilterPipePipe } from './pipes/search-filter-pipe.pipe';
import { SearchItemsServiceService } from './services/search-items-service.service';


@NgModule({
  declarations: [
    SearchComponent,
    ItemDetailsComponent,
    SearchListComponent,
    SearchFilterPipePipe
  ],
  providers: [
    SearchItemsServiceService
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SearchRoutingModule,
    HttpClientModule
  ]
})
export class SearchModule { }
