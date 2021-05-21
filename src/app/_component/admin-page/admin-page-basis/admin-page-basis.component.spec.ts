import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageBasisComponent } from './admin-page-basis.component';

describe('AdminPageBasisComponent', () => {
  let component: AdminPageBasisComponent;
  let fixture: ComponentFixture<AdminPageBasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageBasisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
