import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HisoryComponent } from './hisory.component';

describe('HisoryComponent', () => {
  let component: HisoryComponent;
  let fixture: ComponentFixture<HisoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HisoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
