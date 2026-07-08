export type ShipmentCardProps = {
  currentPoint?: {name: string};
  endDate?: string;
  id: string;
  launchDate?: string;
  shipmentNumber?: string;
  way?: {
    name: string;
    points: {
      id: string;
      lat: string;
      lng: string;
      name: string;
      order: number;
      wayId: string;
    }[];
  };
  isPaused?: boolean;
  isCompleted?: boolean;
};
