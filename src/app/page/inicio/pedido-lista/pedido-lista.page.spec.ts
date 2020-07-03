import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidoListaPage } from './pedido-lista.page';

describe('PedidoListaPage', () => {
  let component: PedidoListaPage;
  let fixture: ComponentFixture<PedidoListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
