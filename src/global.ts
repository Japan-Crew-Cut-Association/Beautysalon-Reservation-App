export interface TypeOfShopCalendar {
  id: number;
  title: string | null;
  allDay: boolean;
  start: Date;
  end: Date;
}

export interface TypeOfReserveCalendar {
  start: Date;
  end: Date;
  title: string;
  type: string;
}

export interface TypeOfMenu {
  id: number;
  menu: string | null;
  amountOfMoney: number;
  treatmentTime: number;
}

export interface TypeOfMenuDetail {
  id: number;
  menu: string;
  detail: string;
  amountOfMoney: number;
  treatmentTime: number;
}

export interface TypeOfReserve {
  id?: number;
  date: string;
  menu: string;
  stylistId: number;
  customerId: string;
}

export interface TypeOfHoliday {
  id?: number;
  date: string;
}

export interface TypeOfCustomer {
  id?: number;
  name: String;
  mail: String;
}

export interface TypeOfStylist {
  id?: number;
  name: String;
}
