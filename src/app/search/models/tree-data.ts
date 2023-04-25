export interface Node {
  id: string;
  parentId: string | null;
  value: string;
}

export interface SearchTreeNode extends Node {
  nodeSearchText: string;
  isNodeContainsSearchText: boolean;
  children: SearchTreeNode[];
}

const nodesArray: Node[] = [
  { id: '1', parentId: null, value: 'تحقيقات موظفي الهيئة' },
  { id: '11', parentId: '1', value: 'مصطفى' },
  { id: '12', parentId: '1', value: 'أمير' },
  { id: '13', parentId: '1', value: 'شحود' },
  { id: '2', parentId: null, value: 'تحقيقات المخلصين الجمركيين' },
  { id: '21', parentId: '2', value: 'ناسكا' },
  { id: '211', parentId: '21', value: 'منصة' },
  { id: '212', parentId: '21', value: 'قطر' },
  { id: '213', parentId: '21', value: 'العقارية' },
  { id: '2131', parentId: '213', value: 'الجمارك' },
  { id: '2132', parentId: '213', value: 'القطرية' },
  { id: '21321', parentId: '2132', value: 'الكويت' },
  { id: '21322', parentId: '2132', value: 'قطر' },
  { id: '21323', parentId: '2132', value: 'سوريا' },
  { id: '2133', parentId: '213', value: 'مصر' },
  { id: '22', parentId: '2', value: 'ايبلا' },
  { id: '23', parentId: '2', value: 'أمير' },
  { id: '231', parentId: '23', value: 'شحود' },
  { id: '232', parentId: '23', value: 'أمير' },
  { id: '233', parentId: '23', value: 'مصطفى' },
];

export const rootTreeNodes = buildSearchTree(nodesArray).filter(
  (node) => node.parentId === null
);

function buildSearchTree(nodes: Node[]): SearchTreeNode[] {
  nodes.forEach((node) => {
    node.value = node.id + '- ' + node.value;
  });
  const treeNodes = nodes.map(
    (node) =>
      ({
        ...node,
        nodeSearchText: node.value,
        children: [],
        isNodeContainsSearchText: false,
      } as SearchTreeNode)
  );

  const rootNodes = treeNodes.filter((node) => node.parentId === null);
  addChildrenToNodes(rootNodes, treeNodes);
  addSearchTextToNodes(rootNodes);
  return treeNodes;
}

function addChildrenToNodes(
  rootNodes: SearchTreeNode[],
  allNodes: SearchTreeNode[]
) {
  if (rootNodes.length === 0) return;

  const newRoots: SearchTreeNode[] = [];

  rootNodes.forEach((root) => {
    const children = allNodes.filter((node) => node.parentId === root.id);
    root.children.push(...children);
    newRoots.push(...children);
  });

  addChildrenToNodes(newRoots, allNodes);
}

function addSearchTextToNodes(rootNodes: SearchTreeNode[]) {
  if (rootNodes.length === 0) return '';

  let _searchText = '';
  rootNodes.forEach((rootNode) => {
    rootNode.nodeSearchText += '!$%' + addSearchTextToNodes(rootNode.children);
    _searchText += '!$%' + rootNode.nodeSearchText;
  });

  return _searchText;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// the previous way code ///////////////////////////////////////////

// export class TreeNode {
//   id: string;
//   parentId: string | null;
//   text: string;
//   children: TreeNode[] | null;

//   constructor(id: string, text: string) {
//     this.id = id;
//     this.parentId = null;
//     this.text = text;
//     this.children = null;
//   }

//   addChildren = (...children: TreeNode[]): void => {
//     if (this.children) this.children.push(...children);
//     else this.children = children;
//     children.forEach((child) => child.parentId == this.id);
//   };
// }

// const root1 = new TreeNode('1', 'تحقيقات موظفي الهيئة');

// const node11 = new TreeNode('11', 'أمير');
// const node12 = new TreeNode('12', 'شحود');
// const node13 = new TreeNode('13', 'مصطفى');

// root1.addChildren(node11, node12, node13);

// const root2 = new TreeNode('2', 'تحقيقات المخلصين الجمركيين');

// const node21 = new TreeNode('21', 'ناسكا');
// const node211 = new TreeNode('211', 'منصة');
// const node212 = new TreeNode('212', 'قطر');
// const node213 = new TreeNode('213', 'العقارية');
// const node2131 = new TreeNode('2131', 'الجمارك');
// const node2132 = new TreeNode('2132', 'القطرية');
// const node21321 = new TreeNode('21321', 'الكويت');
// const node21322 = new TreeNode('21322', 'قطر');
// const node21323 = new TreeNode('21323', 'سوريا');
// node2132.addChildren(node21321, node21322, node21323);
// const node2133 = new TreeNode('2133', 'مصر');
// node213.addChildren(node2131, node2132, node2133);
// node21.addChildren(node211, node212, node213);
// const node22 = new TreeNode('22', 'ايبلا');
// const node23 = new TreeNode('23', 'أمير');
// const node231 = new TreeNode('231', 'شحود');
// const node232 = new TreeNode('232', 'مصطفى');
// const node233 = new TreeNode('233', 'أمير');
// node23.addChildren(node231, node232, node233);
// root2.addChildren(node21, node22, node23);

// export const data2 = [root1, root2];

// ////////////////////////////////////////////////////////////////////////////////////
