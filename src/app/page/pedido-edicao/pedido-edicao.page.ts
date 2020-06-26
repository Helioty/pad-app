import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido-edicao',
  templateUrl: './pedido-edicao.page.html',
  styleUrls: ['./pedido-edicao.page.scss'],
})
export class PedidoEdicaoPage implements OnInit {
  public id: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
