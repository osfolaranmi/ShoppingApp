import { CartService } from '../cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  cart = [];
  items = [];

  sliderConfig = {
    slidersPerView: 1.6,
    spaceBetween:10,
    centeredClides: true
  };

  constructor(private router: Router, private cartService: CartService){ }

  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart  ();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }

  openCart() {
    this.router.navigate(['cart']);
  }

}
