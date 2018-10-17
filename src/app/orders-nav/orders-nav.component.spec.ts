
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OrdersNavComponent } from './orders-nav.component';

describe('OrdersNavComponent', () => {
  let component: OrdersNavComponent;
  let fixture: ComponentFixture<OrdersNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [OrdersNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
