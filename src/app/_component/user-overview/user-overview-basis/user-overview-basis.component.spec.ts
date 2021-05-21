import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOverviewBasisComponent } from './user-overview-basis.component';

describe('UserOverviewBasisComponent', () => {
  let component: UserOverviewBasisComponent;
  let fixture: ComponentFixture<UserOverviewBasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOverviewBasisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOverviewBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
