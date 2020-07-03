import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/shared/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  productForm: FormGroup;

  constructor(
    private productS: ProductService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      id: [''],
      photo: [''],
      value: [0]
    })
  }

  formSubmit() {
    if (!this.productForm.valid) {
      return false;
    } else {
      console.log(this.productForm.value);
      this.productS.createProduct(this.productForm.value).then(res => {
        console.log(res)
        this.productForm.reset();
        // this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }

}
