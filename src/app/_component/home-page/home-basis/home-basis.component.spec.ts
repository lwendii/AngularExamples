import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBasisComponent } from './home-basis.component';

describe('HomeBasisComponent', () => {
  let component: HomeBasisComponent;
  let fixture: ComponentFixture<HomeBasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBasisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
