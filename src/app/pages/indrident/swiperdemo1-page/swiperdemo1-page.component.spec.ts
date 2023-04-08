import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Swiperdemo1PageComponent } from './swiperdemo1-page.component';

describe('Swiperdemo1PageComponent', () => {
  let component: Swiperdemo1PageComponent;
  let fixture: ComponentFixture<Swiperdemo1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Swiperdemo1PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Swiperdemo1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
