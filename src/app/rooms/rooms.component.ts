import { Component, OnInit } from '@angular/core';
import { IRoomSummary } from './rooms';
import { IRoom } from './rooms';

@Component({
  selector: 'hotelinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'The Grand Hotel';
  hideRooms = false;
  roomSummary: IRoomSummary = {
    totalRooms: 3,
    availableRooms: 1,
    bookedRooms: 1,
  };
  selectedRoom: IRoom | undefined;
  roomList: IRoom[] = [];
  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        id: 1,
        number: 101,
        type: 'Deluxe',
        price: 100,
        status: 'Available',
        description: 'A room with a view',
        image:
          'https://i.picsum.photos/id/607/200/300.jpg?hmac=ZEvzqI62NudR3rgqTkRZzFnlEeOt9z-b_i8VdLoTgoI',
        checkInDate: new Date('2021-01-01'),
        checkOutDate: new Date('2021-01-02'),
        anemities: ['TV', 'AC', 'Wifi'],
      },
      {
        id: 2,
        number: 102,
        type: 'Medium',
        price: 50,
        status: 'Booked',
        description: 'A room without a view',
        image:
          'https://i.picsum.photos/id/101/200/300.jpg?hmac=xUDvORQTxaML0fp9wnx4y6LIHvc7M-tNcOJz8rDLRXo',
        checkInDate: new Date('2021-01-01'),
        checkOutDate: new Date('2021-01-02'),
        anemities: ['TV', 'AC', 'Wifi'],
      },
      {
        id: 3,
        number: 103,
        type: 'Small',
        price: 25,
        status: 'Booked',
        description: 'A view without room',
        image:
          'https://i.picsum.photos/id/103/200/300.jpg?hmac=QNhmiuWX_v7Br1-vACnDXKchd_VJ1OjbxDKwIM2NpD4',
        checkInDate: new Date('2021-01-01'),
        checkOutDate: new Date('2021-01-02'),
        anemities: ['TV', 'AC'],
      },
    ];
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectRoom(room: IRoom) {
    console.log(room);
  }
}
