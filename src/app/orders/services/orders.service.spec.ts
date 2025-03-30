import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrdersService } from './orders.service';
import { OrderPage } from '../model/order-page';

describe('OrdersService', () => {
  let service: OrdersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrdersService],
    });
    service = TestBed.inject(OrdersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch orders list', () => {
    const mockResponse: OrderPage = {
      orders: [
        { id: '1', status: 'Pending', created_at: '2023-01-01', updated_at: '2023-01-02', task: 'Task 1', result: 'Success' },
      ],
      totalElements: 1,
      totalPages: 1,
    };

    service.list(0, 10).subscribe((data) => {
      expect(data.orders.length).toBe(1);
      expect(data.orders[0].task).toBe('Task 1');
    });

    const req = httpMock.expectOne('/api/v1/orders?page=0&pageSize=10');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
