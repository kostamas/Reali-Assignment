import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealiHeaderComponent } from './reali-header.component';

describe('RealiHeaderComponent', () => {
  let component: RealiHeaderComponent;
  let fixture: ComponentFixture<RealiHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealiHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
