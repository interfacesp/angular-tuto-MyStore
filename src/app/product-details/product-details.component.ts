import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      const extractedProdId = this.extractProductIdFromRoute(this.route);
      this.product = products.find(aProd => aProd.id ===  extractedProdId);

  }

  private extractProductIdFromRoute(route: ActivatedRoute) {
    const routeParams = route.snapshot.paramMap;
    return Number(routeParams.get('productId'));
  }
}
