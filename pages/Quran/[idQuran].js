import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Alert from '../../components/Alert'
import List from '../../components/List'
import PlaceLoader from '../../components/PlaceLoader'
import { getDetailQuran } from '../../redux/action/quranAction'


function DetailQuran() {

	const { query } = useRouter()
	const dispatch = useDispatch()

	const { getDetailQuranLoading, getDetailQuranData, getDetailQuranError } = useSelector(state => state.QuranReducer)
	
	useEffect(() => {

        dispatch(getDetailQuran(query.idQuran))

    },[dispatch])



	return (
		<>
            <h1 className="md:mt-14 my-5 text-white font-bold md:text-4xl text-center text-2xl">Surat {query.surat}</h1>
            <div className="p-6 md:p-3 w-full h-full flex flex-col justify-center align-middle gap-6">
                {
                    getDetailQuranLoading ?
                    <div className="flex flex-col justify-center align-middle w-full">
                        <h1 className="text-center text-white mb-4">Loading...</h1>
                        <PlaceLoader/>
                    </div>

                    :
                    getDetailQuranError ?
                    <div className="text-center">
                        <h1>{getDetailQuranError}</h1>
                    </div>
                    :
                    getDetailQuranData.length ?
						getDetailQuranData.map((val, i)=>(
							<div key={i} className="flex flex-col gap-6">
								{
									query.idQuran === "1" ? 
										<List ayat={val.ar} arti={val.id}/>
									:
										<List ayat={val.ar.replace('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', '')} arti={val.id}/>
								}
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

export default DetailQuran