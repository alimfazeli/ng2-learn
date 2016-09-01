import {Component} from "angular2/core";
import {SecurityComponent} from './security.component';


@Component({
    selector: 'navigation',
    templateUrl: 'dev/templates/nav.html',
    directives: [SecurityComponent]
})

export class NavigationComponent {
    
}
