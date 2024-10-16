import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorsComponent } from './honors.component';

describe('HonorsComponent', () => {
  let component: HonorsComponent;
  let fixture: ComponentFixture<HonorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HonorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
