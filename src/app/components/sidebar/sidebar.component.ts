import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, tap } from 'rxjs';
import { SearchService } from 'src/app/search/services/search.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  searchControl = new FormControl('', { nonNullable: true });
  isLoading = false;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        // tap((_) => (this.isLoading = true)),
        debounceTime(1000),
        tap(this.searchService.searchByText)
        // tap((_) => (this.isLoading = false))
      )
      .subscribe();
  }
}
