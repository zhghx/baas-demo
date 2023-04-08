import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverwritePageComponent } from './overwrite-page.component';

describe('OverwritePageComponent', () => {
  let component: OverwritePageComponent;
  let fixture: ComponentFixture<OverwritePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverwritePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverwritePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
