import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageParagraphComponent } from './image-paragraph.component';

describe('ImageParagraphComponent', () => {
  let component: ImageParagraphComponent;
  let fixture: ComponentFixture<ImageParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageParagraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
