import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  
  mouseDownX: number | null = null;
  initialSlideIndex = 0;
  currentIndex = 0;
  interval: any;

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider() {
    this.currentIndex = 0; // Establece el índice inicial en la primera imagen
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  
  
  
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  onMouseDownSlider(event: MouseEvent, index: number) {
    this.mouseDownX = event.clientX;
    this.initialSlideIndex = index;
    clearInterval(this.interval); // Detener el temporizador al arrastrar la imagen
  }

  onMouseMoveSlider(event: MouseEvent) {
    if (this.mouseDownX !== null) {
      const deltaX = event.clientX - this.mouseDownX;
      const slideChangeThreshold = 100;
      if (deltaX > slideChangeThreshold) {
        this.prevSlide();
        this.mouseDownX = event.clientX;
      } else if (deltaX < -slideChangeThreshold) {
        this.nextSlide();
        this.mouseDownX = event.clientX;
      }
    }
  }

  onMouseUpSlider() {
    this.mouseDownX = null;
    this.initialSlideIndex = this.currentIndex;
    this.startSlider(); // Reiniciar el temporizador después de soltar el mouse
  }

  onMouseDownIndicator(index: number) {
    this.currentIndex = index;
  }
}
