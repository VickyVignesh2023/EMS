import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VickyComponent } from './vicky.component';

describe('VickyComponent', () => {
  let component: VickyComponent;
  let fixture: ComponentFixture<VickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VickyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
