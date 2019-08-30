import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTocompComponent } from './comp-tocomp.component';

describe('CompTocompComponent', () => {
  let component: CompTocompComponent;
  let fixture: ComponentFixture<CompTocompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTocompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
