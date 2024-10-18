import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmCarouselComponent } from './frm-carousel.component';

describe('FrmCarouselComponent', () => {
  let component: FrmCarouselComponent;
  let fixture: ComponentFixture<FrmCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
