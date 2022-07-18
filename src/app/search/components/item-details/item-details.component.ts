import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable } from "rxjs";
import {
  Person,
  SearchItemsServiceService,
} from "../../services/search-items-service.service";

@Component({
  selector: "app-item-details",
  templateUrl: "./item-details.component.html",
  styleUrls: ["./item-details.component.scss"]
})
export class ItemDetailsComponent implements OnInit {
  person!: Observable<Person>;

  constructor(
    private itemsService: SearchItemsServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.person = this.itemsService.getItemsList().pipe(
      map((persons: any) => persons.find((person: Person) => person.id == id)
    ));
  }
}
