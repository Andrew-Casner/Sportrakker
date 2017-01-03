import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NewMeetComponent} from './new-meet/new-meet.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome to Sportrakker!';
}
