import { Component } from '@angular/core';
import { rootTreeNodes } from '../../models/tree-data';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  rootNodes = rootTreeNodes;
  searchText$ = this.searchService.searchText$;

  constructor(private searchService: SearchService) {}
}
