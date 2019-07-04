import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpendoorComponent } from './opendoor.component';

describe('OpendoorComponent', () => {
  let component: OpendoorComponent;
  let fixture: ComponentFixture<OpendoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpendoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpendoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
