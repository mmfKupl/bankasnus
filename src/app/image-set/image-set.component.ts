import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-set',
  templateUrl: './image-set.component.html',
  styleUrls: ['./image-set.component.scss']
})
export class ImageSetComponent implements OnInit {
  isSliderOpen = false;
  currentSlide = 0;

  imgs = [
    '../../assets/1.jpg',
    '../../assets/2.jpg',
    '../../assets/3.jpg',
    '../../assets/4.jpg',
    '../../assets/5.jpg',
    '../../assets/6.jpg',
    '../../assets/7.jpg',
    '../../assets/8.jpg',
    '../../assets/9.jpg',
    '../../assets/10.jpg',
    '../../assets/11.jpg',
    '../../assets/12.jpg'
  ];

  constructor() {}

  ngOnInit() {}

  openSlider(index: number) {
    this.isSliderOpen = true;
    this.currentSlide = index;
  }

  closeSlider() {
    this.isSliderOpen = false;
  }
}
