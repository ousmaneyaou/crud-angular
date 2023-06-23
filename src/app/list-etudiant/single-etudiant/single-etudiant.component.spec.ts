import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEtudiantComponent } from './single-etudiant.component';

describe('SingleEtudiantComponent', () => {
  let component: SingleEtudiantComponent;
  let fixture: ComponentFixture<SingleEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
