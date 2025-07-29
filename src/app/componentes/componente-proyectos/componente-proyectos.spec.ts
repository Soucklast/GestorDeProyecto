import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteProyectosComponent } from './componente-proyectos';

describe('ComponenteProyectos', () => {
  let component: ComponenteProyectosComponent;
  let fixture: ComponentFixture<ComponenteProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteProyectosComponent],
      declarations: [ComponenteProyectosComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
