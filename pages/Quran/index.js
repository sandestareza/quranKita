import { useEffect } from "react";
import CardImage from "../../components/CardImage";
import { useDispatch, useSelector } from 'react-redux'
import { getListQuran, searchQuran } from '../../redux/action/quranAction'
import PlaceLoader from "../../components/PlaceLoader";
import Alert from "../../components/Alert";
import { useRouter } from 'next/router'


export default function Quran() {
    
    const router = useRouter()
    const dispatch = useDispatch()

    const { getListQuranLoading, getListQuranData, getListQuranError} = useSelector(state => state.QuranReducer)

    useEffect(() => {

        dispatch(getListQuran())

    },[dispatch])
        
    const handleSearch = e => {

        const value = e.target.value

        if (!getListQuranLoading) {
            
            dispatch(searchQuran(value, getListQuranData))
            
        }
    }

    const detailPage = (id, surat) => {
        router.push({
            pathname: '/Quran/[idQuran]',
            query: { idQuran: id, surat },
        })
    }    

    return (
        <>
            <h1 className="md:mt-14 mt-5 text-green-500 font-bold md:text-4xl text-center text-2xl">Daftar Surat</h1>
            <div className="flex flex-row justify-center my-3">
                <input type="search" onChange={handleSearch} className="block py-2.5 px-0 w-1/2 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Cari Surat"/>
            </div>
            <div className="p-6 md:p-3 w-full h-full flex flex-row overflow-auto md:flex-wrap md:justify-center align-middle gap-6">
                {
                    getListQuranLoading ?
                    <div className="flex flex-col justify-center align-middle w-full">
                        <h1 className="text-center text-white mb-4">Loading...</h1>
                        <PlaceLoader/>
                    </div>

                    :
                    getListQuranError ?
                    <div className="text-center">
                        <h1>{getListQuranError}</h1>
                    </div>
                    :
                    getListQuranData.length ?
                        getListQuranData.map((val, i)=>(
                            <div key={i} className="flex flex-row gap-6">
                                <CardImage data={val} gotoPageDetail={(id, surat)=>detailPage(id, surat)}/>
                            </div>
                        ))
                    :
                    <div className="text-center">
                        <Alert/>
                    </div>

                }   
            </div>
        </>
    )
}
