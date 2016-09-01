import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'user-info',
    template: '<i>{{ name }}</i>'
})

export class SecurityComponent implements OnInit{
    name: string = 'Ali Fazeli';

    ngOnInit() {
        alert('test');
    }
}
