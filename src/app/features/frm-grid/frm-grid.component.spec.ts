import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmGridComponent } from './frm-grid.component';

describe('FrmGridComponent', () => {
  let component: FrmGridComponent;
  let fixture: ComponentFixture<FrmGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
