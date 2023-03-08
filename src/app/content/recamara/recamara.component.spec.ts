import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecamaraComponent } from './recamara.component';

describe('RecamaraComponent', () => {
  let component: RecamaraComponent;
  let fixture: ComponentFixture<RecamaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecamaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecamaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
