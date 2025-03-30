import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersComponent } from './orders.component';
import { OrdersService } from '../../services/orders.service';
import { of } from 'rxjs';
import { OrderPage } from '../../model/order-page';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let mockOrdersService: jasmine.SpyObj<OrdersService>;

  beforeEach(async () => {
    mockOrdersService = jasmine.createSpyObj('OrdersService', ['list']);
    mockOrdersService.list.and.returnValue(
      of({
        orders: [
          { id: '1', status: 'Pending', created_at: '2023-01-01', updated_at: '2023-01-02', task: 'Task 1', result: 'Success' },
        ],
        totalElements: 1,
        totalPages: 1,
      } as OrderPage)
    );

    await TestBed.configureTestingModule({
      declarations: [OrdersComponent],
      providers: [{ provide: OrdersService, useValue: mockOrdersService }],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load orders on init', () => {
    expect(mockOrdersService.list).toHaveBeenCalled();
    component.orders$?.subscribe((data) => {
      expect(data.orders.length).toBe(1);
      expect(data.orders[0].task).toBe('Task 1');
    });
  });
});
