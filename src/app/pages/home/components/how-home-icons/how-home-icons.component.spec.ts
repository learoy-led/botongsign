import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowHomeIconsComponent } from './how-home-icons.component';

describe('HowHomeIconsComponent', () => {
  let component: HowHomeIconsComponent;
  let fixture: ComponentFixture<HowHomeIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowHomeIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowHomeIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
