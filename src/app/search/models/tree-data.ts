export class TreeNode {
  id: string;
  parentId: string | null;
  text: string;
  children: TreeNode[] | null;

  constructor(id: string, text: string) {
    this.id = id;
    this.parentId = null;
    this.text = text;
    this.children = null;
  }

  addChildren = (...children: TreeNode[]): void => {
    if (this.children) this.children.push(...children);
    else this.children = children;
    children.forEach((child) => child.parentId == this.id);
  };
}

const root1 = new TreeNode('1', 'تحقيقات موظفي الهيئة');

const node11 = new TreeNode('11', 'أمير');
const node12 = new TreeNode('12', 'شحود');
const node13 = new TreeNode('13', 'مصطفى');

root1.addChildren(node11, node12, node13);

const root2 = new TreeNode('2', 'تحقيقات المخلصين الجمركيين');

const node21 = new TreeNode('21', 'ناسكا');
const node211 = new TreeNode('211', 'منصة');
const node212 = new TreeNode('212', 'قطر');
const node213 = new TreeNode('213', 'العقارية');
const node2131 = new TreeNode('2131', 'الجمارك');
const node2132 = new TreeNode('2132', 'القطرية');
const node21321 = new TreeNode('21321', 'الكويت');
const node21322 = new TreeNode('21322', 'قطر');
const node21323 = new TreeNode('21323', 'سوريا');
node2132.addChildren(node21321, node21322, node21323);
const node2133 = new TreeNode('2133', 'مصر');
node213.addChildren(node2131, node2132, node2133);
node21.addChildren(node211, node212, node213);
const node22 = new TreeNode('22', 'ايبلا');
const node23 = new TreeNode('23', 'أمير');
const node231 = new TreeNode('231', 'شحود');
const node232 = new TreeNode('232', 'مصطفى');
const node233 = new TreeNode('233', 'أمير');
node23.addChildren(node231, node232, node233);
root2.addChildren(node21, node22, node23);

export const data2 = [root1, root2];
