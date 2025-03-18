import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropdownCardComponent } from './desing/molecules/dropdown-card/dropdown-card.component';
import { FormEnterComponent } from './desing/organism/form-enter/form-enter.component';
import { SearchComponent } from './desing/atoms/search/search.component';
import { SelectComponent } from "./desing/atoms/select/select.component";
import { SectionSenderComponent } from './desing/organism/section-sender/section-sender.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DropdownCardComponent, FormEnterComponent, SearchComponent, SelectComponent, SectionSenderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dropdown-example';
}
