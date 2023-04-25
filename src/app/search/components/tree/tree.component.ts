import { Component, Input } from '@angular/core';
import { SearchTreeNode } from '../../models/tree-data';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {
  @Input('nodes') nodes!: SearchTreeNode[];
  @Input('isDescendentContainsSearchText')
  isDescendentContainsSearchText!: boolean;

  searchText$ = this.searchService.searchText$;

  constructor(private searchService: SearchService) {}
}
