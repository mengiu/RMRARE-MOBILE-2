import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDocumentiComponent } from './lista-documenti.component';

describe('ListaDocumentiComponent', () => {
  let component: ListaDocumentiComponent;
  let fixture: ComponentFixture<ListaDocumentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDocumentiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDocumentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
