import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncomendarPage } from './encomendar.page';

describe('EncomendarPage', () => {
  let component: EncomendarPage;
  let fixture: ComponentFixture<EncomendarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomendarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncomendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
