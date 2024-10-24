import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'm3-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  ngOnInit(): void {
      this.startTimer()
  }
    slide:number = 1
    timeLeft: number = 10;
    interval!:any;
    @Input() messageDot:boolean=false;
    @Input() content!:any[];

  startTimer() {

      this.interval = setInterval(() => {
        console.log(this.slide)
        if (this.timeLeft == 0 ) {
          this.slide ++
          if (this.slide >3)
            this.slide = 1
        }
        if(this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.timeLeft = 10;
        }
      },1000)
    }

    pauseTimer() {
      clearInterval(this.interval);
    }


}
