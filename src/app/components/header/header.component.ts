import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output('sidebar-toggle') sidebarToggle = new EventEmitter();

  onToggle() {
    this.sidebarToggle.emit();
  }
}
