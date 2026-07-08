import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
export interface ITimeline {
  id: string;
  title: string;
  isCompleted: boolean;
  isCurrent: boolean;
  isNext: boolean;
  isLast: boolean;
}
export const timelineData: ITimeline[] = [
  {
    id: '1',
    title: 'Order Created',
    isCompleted: true,
    isCurrent: false,
    isNext: false,
    isLast: false
  },
  {
    id: '2',
    title: 'Packed in Warehouse',
    isCompleted: true,
    isCurrent: false,
    isNext: false,
    isLast: false
  },
  {
    id: '3',
    title: 'In Transit',
    isCompleted: false,
    isCurrent: true,
    isNext: false,
    isLast: false
  },
  {
    id: '4',
    title: 'Out for Delivery',
    isCompleted: false,
    isCurrent: false,
    isNext: true,
    isLast: false
  },
  {
    id: '5',
    title: 'Delivered',
    isCompleted: false,
    isCurrent: false,
    isNext: false,
    isLast: true
  }
];
