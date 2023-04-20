import { Component } from '@angular/core';
import { TreeNode } from '../../models/tree-data';
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

  getRootText(root: TreeNode) {
    return root.id + '- ' + root.text;
  }
}
