import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { IRoomSummary } from './rooms';
import { IRoom } from './rooms';
import { RoomsService } from './services/rooms.service';


@Component({
  selector: 'hotelinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName = 'The Grand Hotel';
  
  @ViewChild(HeaderComponent, {static: true} ) headerComponent: HeaderComponent | undefined; // static: true is used to avoid error in ngAfterViewInit
  hideRooms = false;
  roomSummary: IRoomSummary = {
    totalRooms: 3,
    availableRooms: 1,
    bookedRooms: 1,
  };
  // roomService = new RoomsService();
  selectedRoom: IRoom | undefined; // it is possible to use ! instead of | undefined
  roomList: IRoom[] = [];
  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
  this.roomList = this.roomsService.getRooms();
  }
  ngAfterViewInit() {
    console.log(this.headerComponent);
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  selectRoom(room: IRoom) {
    this.selectedRoom = room;
  }
  addRoom() {
    const newRoom: IRoom = { 
    id : this.roomList.length + 1,
    status : 'Available',
    checkInDate : new Date(),
    checkOutDate : new Date(),
    anemities : ['TV', 'AC', 'Wifi'],
    image : 'https://i.picsum.photos/id/369/200/300.jpg?hmac=ZM5SPtUsEjxc4HjsZXj3DAHeKWSaZV6r8sJMGiLYIJ8',
    description : 'A room without doors',
    number : 100 + this.roomList.length+1,
    type : 'Deluxe',
    price : 100+this.roomList.length,
    };
    // this.roomList.push(newRoom);
    this.roomList = [...this.roomList, newRoom];
  }
}
