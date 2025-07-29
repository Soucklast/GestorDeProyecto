import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCalendarioComponent } from './componente-calendario';

describe('ComponenteCalendario', () => {
  let component: ComponenteCalendarioComponent;
  let fixture: ComponentFixture<ComponenteCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteCalendarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
