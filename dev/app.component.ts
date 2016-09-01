import {Component} from 'angular2/core';
import {RegisterComponent} from './register.component';
import {NavigationComponent} from './navigation.component';

@Component({
  selector: 'my-app',
  directives: [RegisterComponent, NavigationComponent],
  templateUrl: '/dev/templates/main.html'
})

export class AppComponent {

}
