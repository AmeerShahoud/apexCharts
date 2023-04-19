import { Component, Input } from '@angular/core';
import { TreeData } from '../../models/tree-data';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {
  @Input('sourceData') sourceData!: TreeData[];
  searchText$ = this.searchService.searchText$;

  constructor(private searchService: SearchService) {}

  getItemKey(item: TreeData) {
    return Object.keys(item)[0];
  }

  getItemValue(item: TreeData) {
    return Object.values(item)[0];
  }

  isEmpty(item: TreeData) {
    return item[this.getItemKey(item)].length === 0;
  }
}
