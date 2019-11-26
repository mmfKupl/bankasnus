import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() imgs: string[] = [];
  @Input() activeImg = 0;
  @Output() closeEvent = new EventEmitter<boolean>(false);

  constructor() {}

  ngOnInit() {}

  @HostListener('click', ['$event.target'])
  onClick(target) {
    if (target.localName === 'app-slider') {
      this.close();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownEscape(event: KeyboardEvent) {
    this.close();
  }

  isActive(index: number) {
    return index === this.activeImg;
  }

  next() {
    this.activeImg =
      this.activeImg === this.imgs.length - 1 ? 0 : this.activeImg + 1;
  }

  prev() {
    this.activeImg =
      this.activeImg === 0 ? this.imgs.length - 1 : this.activeImg - 1;
  }

  close() {
    this.closeEvent.emit(true);
  }
}
