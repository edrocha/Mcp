import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmBadgeComponent } from './frm-badge.component';

describe('FrmBadgeComponent', () => {
  let component: FrmBadgeComponent;
  let fixture: ComponentFixture<FrmBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
