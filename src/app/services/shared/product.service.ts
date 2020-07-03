import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Produto } from 'src/app/class/produto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productListRef: AngularFireList<Produto>;
  productRef: AngularFireObject<Produto>;

  constructor(private db: AngularFireDatabase, private firestore: AngularFirestore) { }

  createProduct(product: Produto) {
    return this.firestore.collection('produtos').add(product);
  }

  getProductList() {
    return this.firestore.collection('produtos').snapshotChanges();
  }

  // Create
  // createProduct(item: Produto) {
  //   return this.productListRef.push({
  //     id: item.id,
  //     photo: item.photo,
  //     value: item.value
  //   });
  // }

  // Get Single
  getProduct(id: string) {
    this.productRef = this.db.object('/produtos/' + id);
    return this.productRef;
  }

  // Get List
  // getProductList() {
  //   this.productListRef = this.db.list('/produtos');
  //   return this.productListRef;
  // }

  // Update
  updateProduct(id, item: Produto) {
    return this.productRef.update({
      id: item.id,
      photo: item.photo,
      value: item.value
    });
  }

  // Delete
  deleteProduct(id: string) {
    this.productRef = this.db.object('/produtos/' + id);
    this.productRef.remove();
  }

}
