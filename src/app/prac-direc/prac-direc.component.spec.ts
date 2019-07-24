import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracDirecComponent } from './prac-direc.component';

describe('PracDirecComponent', () => {
  let component: PracDirecComponent;
  let fixture: ComponentFixture<PracDirecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracDirecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracDirecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
