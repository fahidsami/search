import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { combineLatest, debounceTime, map, Observable, startWith } from "rxjs";
import {
  RandomItem,
  SearchItemsServiceService,
} from "../../services/search-items-service.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  searchField: FormControl;
  itemsList!: Observable<RandomItem[]>;
  showit: boolean;

  constructor(
    private itemsService: SearchItemsServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.searchField = new FormControl("");
    this.showit = false;
  }

  ngOnInit(): void {
    const items$: Observable<RandomItem[]> = this.itemsService.getItemsList();
    const searchTerm$: Observable<string> = this.searchField.valueChanges.pipe(
      startWith(this.searchField.value)
    );
    this.itemsList = combineLatest([items$, searchTerm$]).pipe(
      debounceTime(300),
      map(([items, searchValue]) => {
        return items.filter((el) =>
          el.name.toLocaleLowerCase().includes(searchValue)
        );
      })
    );
  }

  onItemClick(item: RandomItem) {
    this.router.navigate([item.id, "details"], { relativeTo: this.route });
  }

  focusOutFunction() {
    this.showit = true;
  }
  onKeyUp() {
    this.showit = false;
  }
}