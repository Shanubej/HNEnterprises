import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent, FooterComponent, RouterModule, CarouselModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
imageUrl = environment.baseUrl;

  banner_slider: CarouselModule = {
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    // rtl: true,
    nav: true,
    navText: [
      '<img src='+this.imageUrl+'/Home/left-arrow-48.png>',
      '<img src='+this.imageUrl+'/Home/right-arrow-48.png>',
    ],
    autoWidth: false,
  };
  
  gallary: CarouselModule = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 13,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: ['<img src="'+ this.imageUrl + '/Clients/light-left-arrow.png" alt="">', '<img src="'+this.imageUrl+'/Clients/light-right-arrow.png" alt="">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

  
  partnersOptions: CarouselModule = {
    items: 8,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    autoplay: true,
    autoplayTimeout: 2200,
    margin: 25,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      500: {
        items: 3,
      },
      600: {
        items: 5,
      },
      740: {

        items: 7,
      },
      940: {
        items: 8,
      },
    },
    nav: false,
    autoWidth: false
  }

}
