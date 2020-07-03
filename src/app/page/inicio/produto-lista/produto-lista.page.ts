import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/shared/product.service';
import { Produto } from 'src/app/class/produto';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.page.html',
  styleUrls: ['./produto-lista.page.scss'],
})
export class ProdutoListaPage implements OnInit {

  public produtos: Produto[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.productService.getProductList().subscribe(data => {
      this.produtos = data.map((e: any) => {
        return {
          id: e.payload.doc.id, ...e.payload.doc.data()
        } as Produto;
      })
      console.log(this.produtos);
    });
  }

}
