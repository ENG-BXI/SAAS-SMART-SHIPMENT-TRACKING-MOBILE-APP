import {Input} from '@/components/ui/input';
import {Text} from '@/components/ui/text';
import {Image} from 'expo-image';
import React from 'react';
import {FlatList, Pressable, ScrollView, View} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {Card, CardContent} from '@/components/ui/card';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import {Button} from '@/components/ui/button';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

export const timelineData = [
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

const Home = () => {
  return (
    <View>
      <HeaderAndBox />
      <SummaryHeaderBox />
      <ShipmentDetailsAndPointTimeLine />
    </View>
  );
};

export default Home;
function HeaderAndBox() {
  return (
    <View className='flex-row items-center justify-between'>
      <View>
        <Text className='text-2xl font-bold'>Good Morning, Abdo</Text>
        <Text className='text-xl '>Company Name</Text>
      </View>
      <Image source={require('@/assets/images/home-box.png')} style={{width: 250, height: 250}} />
    </View>
  );
}

function SummaryHeaderBox() {
  return (
    <View>
      <View className='bg-white flex-row justify-around rounded-xl px-4 py-2 relative -top-3 z-10'>
        <View className='flex-row items-center gap-3'>
          <MaterialIcons name='my-location' size={35} />
          <View>
            <Text>Current point</Text>
            <Text className='font-bold text-xl'>Mukalla</Text>
          </View>
        </View>
        <View className='w-0.5 bg-gray-100 h-3/4 my-auto' />
        <View className='flex-row items-center gap-3'>
          <FontAwesome6 name='route' size={30} color='black' />
          <View>
            <Text>Way Name</Text>
            <Text className='font-bold text-xl'>Mukalla Way</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          elevation: 10
        }}
        className='flex-row gap-2 items-center bg-[#DAF1DB] w-full px-4 py-2 rounded-2xl relative -top-8 pt-7'
      >
        <FontAwesome6 name='award' size={20} color='black' />
        <Text className='flex-1'>Shipment Details</Text>
        <MaterialIcons name='keyboard-arrow-right' size={24} />
      </View>
    </View>
  );
}

function ShipmentDetailsAndPointTimeLine() {
  return (
    <Card>
      <CardContent className='px-2 pb-2 bg-[#F2F5F8]'>
        <View className='px-3 flex-row justify-between mb-5'>
          <View>
            <Text className='font-bold text-xl'>Shipment #SH-10254</Text>
            <Text>Status • Ready to Start</Text>
          </View>
          {/* Button */}
          <Button variant='primary' size={'lg'} className='flex-row items-center gap-1'>
            <EvilIcons name='location' size={24} color='white' />
            <Text className='text-white'>Movement</Text>
          </Button>
        </View>
        <FlatList
          className='h-60 bg-white p-3 rounded-xl'
          data={timelineData}
          renderItem={({item}) => {
            const point = item.isCurrent ? {name: 'Current Point', icon: <MaterialIcons name='my-location' size={24} color='green' />} : item.isCompleted ? {name: 'Competed Point', icon: <FontAwesome name='check-circle-o' size={24} color='green' />} : item.isNext ? {name: 'Next Point', icon: <Ionicons name='location' size={24} color='green' />} : {name: 'Last Point', icon: <Ionicons name='location' size={24} color='green' />};
            return (
              <View className='flex-row mb-3'>
                {/* Timeline */}
                <View className='items-center mr-4'>
                  {point.icon}
                  <View className='border-l border-dashed flex-1 bg-gray-300' />
                </View>

                {/* Content */}
                <View className='flex-1'>
                  <Text className='text-gray-500'>{point.name}</Text>
                  <Text className='font-bold text-lg'>{item.title}</Text>
                </View>
              </View>
            );
          }}
        />
      </CardContent>
    </Card>
  );
}
