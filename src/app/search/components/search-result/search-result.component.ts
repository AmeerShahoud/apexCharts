import { Component } from '@angular/core';
import { TreeData, data } from '../../models/tree-data';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  searchResult$ = this.searchService.searchResult$;
  searchText$ = this.searchService.searchText$;

  constructor(private searchService: SearchService) {}

  getItemKey(item: TreeData) {
    return Object.keys(item)[0];
  }

  getItemValue(item: TreeData) {
    return Object.values(item)[0];
  }
}
