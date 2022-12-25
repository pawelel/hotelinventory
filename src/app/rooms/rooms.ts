export interface IRoomSummary {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface IRoom {
  id: number;
  number: number;
  type: string;
  price: number;
  status: string;
  description: string;
  image: string;
  checkInDate: Date;
  checkOutDate: Date;
  anemities: string[];
}
