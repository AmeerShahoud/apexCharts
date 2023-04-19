import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TreeData, data } from '../models/tree-data';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private _data = data;

  private _searchTextSubject = new BehaviorSubject<string>('');
  searchText$ = this._searchTextSubject.asObservable();

  private _searchResultSubject = new BehaviorSubject<TreeData[] | null>(
    this._data
  );
  searchResult$ = this._searchResultSubject.asObservable();

  constructor() {}
  searchByText = (text: string) => {
    if (text) {
      const _searchResult = this._filter(this._data, new RegExp(text, 'gi'));
      this._searchResultSubject.next(_searchResult);
    } else {
      this._searchResultSubject.next(this._data);
    }
    this._searchTextSubject.next(text);
  };

  private _filter = (data: TreeData[], regex: RegExp): TreeData[] | null => {
    if (data.length === 0) {
      return null;
    }
    const _returnData: TreeData[] = [];

    for (let i = 0; i < data.length; i++) {
      const key = Object.keys(data[i])[0];
      if (key.match(regex)) {
        _returnData.push({ ...data[i] });
      } else {
        const _filteredData = this._filter(data[i][key], regex);
        if (_filteredData) {
          _returnData.push({ [key]: _filteredData });
        }
      }
    }
    if (_returnData.length === 0) return null;

    return _returnData;
  };
}
