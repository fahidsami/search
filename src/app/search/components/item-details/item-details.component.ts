import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable } from "rxjs";
import {
  RandomItem,
  SearchItemsServiceService,
} from "../../services/search-items-service.service";

@Component({
  selector: "app-item-details",
  templateUrl: "./item-details.component.html",
  styleUrls: ["./item-details.component.scss"]
})
export class ItemDetailsComponent implements OnInit {
  item!: Observable<RandomItem>;

  constructor(
    private itemsService: SearchItemsServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.item = this.itemsService.getItemsList().pipe(
      map((data: any) => data.find((el: any) => el.id == id)
    ));
  }
}
