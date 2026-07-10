import {DRIVER, FINISHED, MOVE_SHIPMENT_WITH_NOTIFICATION} from '@/api/constant';
import {api} from '@/api/setup';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {SHIPMENT} from '../../api/constant';
import {TResponseWithPagination} from '@/api/type';
import {SHIPMENT_DETAILS_KEY} from './shipmentDetails/api';
import {STATISTICS_KEY} from '../home/api';

export const FINISHED_SHIPMENT_KEY = ['SHIPMENT'];
export const MOVE_SHIPMENT_KEY = ['MOVE_SHIPMENT'];
type TFinishedShipmentParams = {
  page: number;
  limit: number;
  search: string;
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
async function getFinishedShipment({page, search, limit}: TFinishedShipmentParams) {
  return await api.get<TResponseWithPagination<TFinishedShipmentResponse[]>>(`${SHIPMENT}/${FINISHED}/${DRIVER}`, {params: {page, search, limit}});
}
export function useFinishedShipments({page, search, limit}: TFinishedShipmentParams) {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery({
    queryKey: [...FINISHED_SHIPMENT_KEY, page + 1, search],
    queryFn: () => getFinishedShipment({page: page + 1, search, limit})
  });
  return useQuery({
    queryKey: [...FINISHED_SHIPMENT_KEY, page, search],
    queryFn: () => getFinishedShipment({page, search, limit})
  });
}

async function moveShipment(id: string) {
  return await api.put(`${SHIPMENT}/${id}/${MOVE_SHIPMENT_WITH_NOTIFICATION}`);
}

export function useMoveShipment(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: MOVE_SHIPMENT_KEY,
    mutationFn: () => moveShipment(id),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [...SHIPMENT_DETAILS_KEY, id]
      });
      queryClient.refetchQueries({
        queryKey: STATISTICS_KEY
      });
    }
  });
}
