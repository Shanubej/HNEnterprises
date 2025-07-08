import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent, FooterComponent, RouterModule, CarouselModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  imageUrl = environment.baseUrl;

  banner_slider: OwlOptions = {
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 1800,
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
      '<img src=Images/Home/left-arrow-48.png>',
      '<img src=Images/Home/right-arrow-48.png>',
    ],
    autoWidth: false,
  };

  gallary: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 13,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: ['<img src="Images/Clients/light-left-arrow.png" alt="">', '<img src="Images/Clients/light-right-arrow.png" alt="">'],
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

  partnersOptions: OwlOptions = {
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

  HeaderSlider: any = [
    { ImageName: "WhatsApp_Image1.jpeg" },
    { ImageName: "WhatsApp_Image2.jpeg" },
    { ImageName: "WhatsApp_Image3.jpeg" },
    { ImageName: "WhatsApp_Image4.jpeg" },
    { ImageName: "WhatsApp_Image5.jpeg" },
    { ImageName: "WhatsApp_Image6.jpeg" },
    { ImageName: "WhatsApp_Image7.jpeg" },
    { ImageName: "WhatsApp_Image8.jpeg" },
    { ImageName: "WhatsApp_Image9.jpeg" },
    { ImageName: "WhatsApp_Image10.jpeg" },
    { ImageName: "WhatsApp_Image11.jpeg" },
    { ImageName: "WhatsApp_Image12.jpeg" },
    { ImageName: "WhatsApp_Image13.jpeg" },
    { ImageName: "WhatsApp_Image14.jpeg" },
    { ImageName: "WhatsApp_Image15.jpeg" },
  ]

  constructor() {

  }

}
