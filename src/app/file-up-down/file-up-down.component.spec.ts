import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUpDownComponent } from './file-up-down.component';

describe('FileUpDownComponent', () => {
  let component: FileUpDownComponent;
  let fixture: ComponentFixture<FileUpDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUpDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUpDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
