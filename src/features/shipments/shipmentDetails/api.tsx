import {SHIPMENT} from '@/api/constant';
import {api} from '@/api/setup';
import {useQuery} from '@tanstack/react-query';

export const SHIPMENT_DETAILS_KEY = ['shipment-details'];

export type TShipmentDetailsResponse = {
  data: {
    clients: number;
    currentPoint: {
      name: string;
    };
    driver: {
      phoneNumber: string | null;
      userName: string;
    };
    endDate: string;
    id: string;
    isCompleted: boolean;
    isPaused: boolean;
    launchDate: string;
    shipmentItem: number;
    shipmentNumber: string;
    way: {
      name: string;
    };
  };
};
async function getShipmentDetails(id: string) {
  return await api.get<TShipmentDetailsResponse>(`${SHIPMENT}/${id}`);
}

export function useShipmentDetails(id?: string) {
  return useQuery({
    queryKey: [...SHIPMENT_DETAILS_KEY, id],
    queryFn: () => getShipmentDetails(id!),
    enabled: !!id
  });
}
