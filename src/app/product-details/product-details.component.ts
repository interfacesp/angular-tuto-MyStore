import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const extractedProdId = this.extractProductIdFromRoute(this.route);
    this.product = products.find((aProd) => aProd.id === extractedProdId);
  }

  private extractProductIdFromRoute(route: ActivatedRoute) {
    const routeParams = route.snapshot.paramMap;
    return Number(routeParams.get('productId'));
  }

  addToCart(aProd: Product) {
    this.cartService.addToCart(aProd);
    const msg = aProd.name + ' has been added to the cart';
    window.alert(msg);
  }
}
