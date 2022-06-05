import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptosTableComponent } from './cryptos-table.component';

describe('CryptosTableComponent', () => {
  let component: CryptosTableComponent;
  let fixture: ComponentFixture<CryptosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptosTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
