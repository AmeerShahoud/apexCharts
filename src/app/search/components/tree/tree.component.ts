import { Component, Input } from '@angular/core';
import { TreeNode } from '../../models/tree-data';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {
  @Input('sourceData') sourceData!: TreeNode[];
  searchText$ = this.searchService.searchText$;

  constructor(private searchService: SearchService) {}

  getNodeText(node: TreeNode) {
    return node.id + '- ' + node.text;
  }
}
