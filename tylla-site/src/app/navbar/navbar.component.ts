import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output()
  selected = new EventEmitter<string>();

  selectPage(selectedPage: string) {
    this.selected.emit(selectedPage);
  }
}
