import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmNumberComponent } from './frm-number.component';

describe('FrmNumberComponent', () => {
  let component: FrmNumberComponent;
  let fixture: ComponentFixture<FrmNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
