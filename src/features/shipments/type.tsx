export type ShipmentCardProps = {
  shipmentNumber: string;
  routeName: string;
  numberOfPoint: number;
  startTime: string;
  endTime: string;
  fromCity: string;
  toCity: string;
};
export const currenPoint = {
  shipmentNumber: 'SHP-1005',
  routeName: 'Aden → Mukalla Express',
  numberOfPoint: 6,
  startTime: '08:00 AM',
  endTime: '-',
  fromCity: 'Aden',
  toCity: 'Mukalla'
};
export const shipmentsMock: ShipmentCardProps[] = [
  {
    shipmentNumber: 'SHP-1001',
    routeName: 'Aden → Mukalla Express',
    numberOfPoint: 6,
    startTime: '08:00 AM',
    endTime: '02:30 PM',
    fromCity: 'Aden',
    toCity: 'Mukalla'
  },
  {
    shipmentNumber: 'SHP-1002',
    routeName: 'Sana’a → Taiz Route',
    numberOfPoint: 4,
    startTime: '09:15 AM',
    endTime: '01:45 PM',
    fromCity: 'Sana’a',
    toCity: 'Taiz'
  },
  {
    shipmentNumber: 'SHP-1003',
    routeName: 'Mukalla → Seiyun Cargo Line',
    numberOfPoint: 8,
    startTime: '11:00 AM',
    endTime: '05:20 PM',
    fromCity: 'Mukalla',
    toCity: 'Seiyun'
  },
  {
    shipmentNumber: 'SHP-1004',
    routeName: 'Aden → Riyadh Transit',
    numberOfPoint: 12,
    startTime: '06:30 AM',
    endTime: '08:00 PM',
    fromCity: 'Aden',
    toCity: 'Riyadh'
  },
  {
    shipmentNumber: 'SHP-1005',
    routeName: 'Taiz → Ibb Local Delivery',
    numberOfPoint: 3,
    startTime: '10:00 AM',
    endTime: '12:30 PM',
    fromCity: 'Taiz',
    toCity: 'Ibb'
  }
];
