import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmMenuComponent } from './frm-menu.component';

describe('FrmMenuComponent', () => {
  let component: FrmMenuComponent;
  let fixture: ComponentFixture<FrmMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
