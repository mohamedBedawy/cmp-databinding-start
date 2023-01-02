import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CockpitChildComponent } from './cockpit-child.component';

describe('CockpitChildComponent', () => {
  let component: CockpitChildComponent;
  let fixture: ComponentFixture<CockpitChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CockpitChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CockpitChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
