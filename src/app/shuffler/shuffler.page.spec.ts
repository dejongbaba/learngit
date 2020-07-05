import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShufflerPage } from './shuffler.page';

describe('ShufflerPage', () => {
  let component: ShufflerPage;
  let fixture: ComponentFixture<ShufflerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShufflerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShufflerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
