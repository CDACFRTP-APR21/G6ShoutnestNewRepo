import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadpostComponent } from './uploadpost.component';

describe('UploadpostComponent', () => {
  let component: UploadpostComponent;
  let fixture: ComponentFixture<UploadpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
