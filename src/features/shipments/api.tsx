import {DRIVER, FINISHED} from '@/api/constant';
import {api} from '@/api/setup';
import {useQuery} from '@tanstack/react-query';
import {SHIPMENT} from '../../api/constant';
import {TResponseWithPagination} from '@/api/type';

export const FINISHED_SHIPMENT_KEY = ['SHIPMENT'];
type TFinishedShipmentParams = {
  page: number;
  limit: number;
};

export type TFinishedShipmentResponse = {
  currentPoint: {id: string; name: string};
  driver: {id: string; userName: string};
  endDate: string;
  id: string;
  isCompleted: boolean;
  isPaused: boolean;
  launchDate: string;
  shipmentNumber: string;
  way: {
    id: string;
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
};
async function getFinishedShipment({page, limit}: TFinishedShipmentParams) {
  return await api.get<TResponseWithPagination<TFinishedShipmentResponse[]>>(`${SHIPMENT}/${FINISHED}/${DRIVER}`, {params: {page, limit}});
}
export function useFinishedShipments({page, limit}: TFinishedShipmentParams) {
  return useQuery({
    queryKey: FINISHED_SHIPMENT_KEY,
    queryFn: () => getFinishedShipment({page, limit})
  });
}
