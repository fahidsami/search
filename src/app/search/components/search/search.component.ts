import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { combineLatest, debounceTime, map, Observable, startWith } from "rxjs";
import {
  Person,
  SearchItemsServiceService,
} from "../../services/search-items-service.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  searchField: FormControl;
  personList!: Observable<Person[]>;
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
    const persons$: Observable<Person[]> = this.itemsService.getItemsList();
    const searchTerm$: Observable<string> = this.searchField.valueChanges.pipe(
      startWith(this.searchField.value)
    );
    this.personList = combineLatest([persons$, searchTerm$]).pipe(
      debounceTime(300),
      map(([persons, searchValue]) => {
        return persons.filter(person =>
          person.name.toLocaleLowerCase().includes(searchValue)
        );
      })
    );
  }

  onItemClick(person: Person) {
    this.router.navigate([person.id, "details"], { relativeTo: this.route });
  }

  focusOutFunction() {
    this.showit = true;
  }
  onKeyUp() {
    this.showit = false;
  }
}