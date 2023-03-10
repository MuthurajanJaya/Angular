import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpbarComponent } from './upbar.component';

describe('UpbarComponent', () => {
  let component: UpbarComponent;
  let fixture: ComponentFixture<UpbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
