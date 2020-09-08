import { Component, Input, OnChanges, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'fa-icons',
    templateUrl: './font-awesome-icons.component.html'
})
export class FontAwesomeIcons implements OnChanges {
    @Input() rating: number;
    @Output() iconClicked: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;

    ngOnChanges(): void {
        console.log('Changes happen')
        this.starWidth = this.rating * 75/5;
    }

    onClick() {
        console.log('something happend ... click')
        this.iconClicked.emit(`Icon was just clicked with a rating of ${this.rating}`)
    }
}
