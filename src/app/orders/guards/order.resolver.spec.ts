import { TestBed } from '@angular/core/testing';
import { OrderResolver } from './order.resolver';
import { OrdersService } from '../services/orders.service';
import { of } from 'rxjs';

describe('OrderResolver', () => {
  let resolver: OrderResolver;
  let mockOrdersService: jasmine.SpyObj<OrdersService>;

  beforeEach(() => {
    mockOrdersService = jasmine.createSpyObj('OrdersService', ['loadById']);
    mockOrdersService.loadById.and.returnValue(
      of({ id: '1', status: 'Pending', created_at: '', updated_at: '', task: 'Task 1', result: '' })
    );

    TestBed.configureTestingModule({
      providers: [
        OrderResolver,
        { provide: OrdersService, useValue: mockOrdersService },
      ],
    });
    resolver = TestBed.inject(OrderResolver);
  });

  it('should resolve order by ID', () => {
    resolver.resolve({ params: { id: '1' } } as any, {} as any).subscribe((order) => {
      expect(order.task).toBe('Task 1');
    });
    expect(mockOrdersService.loadById).toHaveBeenCalledWith('1');
  });
});
