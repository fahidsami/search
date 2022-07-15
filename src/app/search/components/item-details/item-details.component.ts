import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RandomItem, SearchItemsServiceService } from '../../services/search-items-service.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  item: RandomItem | undefined;

  constructor(
    private itemsService: SearchItemsServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.itemsService.getDetails(id).subscribe((itemDetails) => {
      if (!itemDetails) {
        this.router.navigate(['not-found']);
      } else {
        this.item = itemDetails;
      }
    });
  }
}
