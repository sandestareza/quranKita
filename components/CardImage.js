import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gambar from '../public/img/logo.svg'
import { FaFileAudio, FaEye } from 'react-icons/fa'

function CardImage({data, gotoPageDetail}) {

  return (
        <div className='card transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300'>
            <Image src={gambar} alt="gambar" className='w-full h-full object-cover bg-[#02020B]' />
            <div className='p-5 flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                    <div className='badge capitalize'>{data.ayat} Ayat</div>
                    <div className='badge capitalize'>{data.type}</div>
                </div>
                <h2 className='font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>
                    {data.nama} {data.asma}
                </h2>
                <div>
                    <span className='text-xl font-ligth'>{data.arti}</span>
                </div>
                <div className='mt-5 flex gap-2'>
                    <button className='btn-primary' onClick={()=>gotoPageDetail(data.nomor, data.nama)}>
                        Baca Quran
                    </button>
                    <button className='btn-icon' type='button' 
                            onClick={() => {
                                // setShowModal(true)
                                // setDetailQuran(item.keterangan)
                            }}
                    >
                        <FaEye />
                    </button>
                    <button className='btn-icon'>
                        <Link href={data.audio}>
                            <a target="_blank"><FaFileAudio /></a>
                        </Link>                                    
                    </button>
                </div>
            </div>
        </div>
  )
}

export default CardImage