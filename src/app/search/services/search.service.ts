import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // private _data = data2;

  private _searchTextSubject = new BehaviorSubject<string>('');
  searchText$ = this._searchTextSubject.asObservable();

  // private _searchResultSubject = new BehaviorSubject<TreeNode[] | null>(
  //   this._data
  // );
  // searchResult$ = this._searchResultSubject.asObservable();

  constructor() {}
  searchByText = (text: string) => {
    // if (text) {
    //   const _searchResult = this._filter2(this._data, new RegExp(text, 'gi'));
    //   this._searchResultSubject.next(_searchResult);
    // } else {
    //   this._searchResultSubject.next(this._data);
    // }
    this._searchTextSubject.next(text);
  };

  // private _filter2 = (data: TreeNode[], regex: RegExp): TreeNode[] | null => {
  //   if (data.length === 0) {
  //     return null;
  //   }

  //   const _returnData: TreeNode[] = [];
  //   for (let i = 0; i < data.length; i++) {
  //     let nodeText = data[i].id + ' ' + data[i].text;
  //     if (nodeText.match(regex)) {
  //       _returnData.push(...[data[i]]);
  //     } else {
  //       if (data[i].children) {
  //         const _filteredData = this._filter2(data[i].children!, regex);
  //         if (_filteredData) {
  //           const _node = new TreeNode(data[i].id, data[i].text);
  //           _node.addChildren(..._filteredData);
  //           _returnData.push(_node);
  //         }
  //       }
  //     }
  //   }
  //   if (_returnData.length === 0) return null;

  //   return _returnData;
  // };
}
