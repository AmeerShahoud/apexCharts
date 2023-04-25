import { Pipe, PipeTransform } from '@angular/core';
import { SearchTreeNode } from '../models/tree-data';

@Pipe({
  name: 'treeFilterBySearchText',
})
export class TreeFilterBySearchTextPipe implements PipeTransform {
  transform(
    nodes: SearchTreeNode[],
    isDescendentContainsSearchText: boolean,
    searchText: string,
    ...args: unknown[]
  ): {
    filteredNodes: SearchTreeNode[];
    isDescendentContainsSearchText: boolean;
  } {
    if (!searchText || isDescendentContainsSearchText) {
      return { filteredNodes: nodes, isDescendentContainsSearchText };
    }

    const regex = new RegExp(searchText, 'gi');

    const filteredNodes = nodes.filter((node) =>
      node.nodeSearchText.match(regex)
    );

    filteredNodes.forEach((node) => {
      if (node.value.match(regex)) node.isNodeContainsSearchText = true;
      else node.isNodeContainsSearchText = false;
    });

    return { filteredNodes, isDescendentContainsSearchText };
  }
}
