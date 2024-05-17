import React from 'react'
import Image from 'next/image'
import Countdown from 'react-countdown'
import CountdownTimer from './CountDownTimer'
import CarImage from './CarImage'
import { Auction } from '../types';

type Props = {
  auction: Auction
}

export default function AuctionCard({auction}: Props) {
  return (
    <a href='#' className='group'>
      <div className='w-full bg-gray-300 aspect-w-16 aspect-h-10 rounded-lg overflow-hidden'>
        <div>
          <CarImage imageUrl={auction.imageUrl} />
          <div className='absolute bottom-2 left-2'>
            <CountdownTimer auctionEnd={auction.auctionEnd}/>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-4'>
        <h3 className='text-gray-700'>{auction.make} {auction.model}</h3>
        <p className='font-semibold text-sm'>{auction.year}</p>
      </div>     
    </a>
  )
}
