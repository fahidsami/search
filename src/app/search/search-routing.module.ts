import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from 'src/app/search/components/item-details/item-details.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchListComponent,
    children: [
      {
        path: '',
        component: SearchComponent,
      },      {
        path: ':id/details',
        component: ItemDetailsComponent,
      }

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
