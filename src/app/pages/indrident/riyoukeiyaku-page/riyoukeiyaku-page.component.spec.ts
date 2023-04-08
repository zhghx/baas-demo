import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiyoukeiyakuPageComponent } from './riyoukeiyaku-page.component';

describe('RiyoukeiyakuPageComponent', () => {
  let component: RiyoukeiyakuPageComponent;
  let fixture: ComponentFixture<RiyoukeiyakuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiyoukeiyakuPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiyoukeiyakuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
