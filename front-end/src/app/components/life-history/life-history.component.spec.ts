import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeHistoryComponent } from './life-history.component';

describe('LifeHistoryComponent', () => {
  let component: LifeHistoryComponent;
  let fixture: ComponentFixture<LifeHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
