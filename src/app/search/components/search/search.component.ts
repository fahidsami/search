import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RandomItem, SearchItemsServiceService } from "../../services/search-items-service.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  searchField = new FormControl();
  itemsList: RandomItem[] = [];

  constructor(
    private itemsService: SearchItemsServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemsService.getItemsList().subscribe((itemsList) => {
      this.itemsList = itemsList;
    });
  }

  onItemClick(item: any) {
    this.router.navigate([item.id, "details"], { relativeTo: this.route });
  }
  showit = false;
  focusOutFunction() {
    this.showit = true;
  }
  onKeyUp() {
    this.showit = false;
  }
}
