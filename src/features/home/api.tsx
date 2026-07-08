import {DRIVER_STATSTICS, STATSTICS} from '@/api/constant';
import {api} from '@/api/setup';
import {useQuery} from '@tanstack/react-query';

export const STATISTICS_KEY = ['statistics'];
async function getStatistics() {
  return await api.get(`${STATSTICS}/${DRIVER_STATSTICS}`);
}
export type TStatistics = {
  data: {
    data: {
      company: {name: string; users: {email: string; userName: string}[]};
      currentPoint: {name: string};
      id: string;
      isCompleted: boolean;
      isPaused: boolean;
      shipmentNumber: string;
      userName: string;
      launchDate: string;
      way: {
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
    message: string;
    status: number;
  };
};
export function useStatistics() {
  return useQuery<TStatistics>({
    queryKey: STATISTICS_KEY,
    queryFn: () => getStatistics()
  });
}
