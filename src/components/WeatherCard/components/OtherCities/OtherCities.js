import { useEffect, useState } from 'react'
import CityList from './CityList'

const OtherCities = ({others,loading})=>{
    //这里和Forecast一样，也可以把状态都提升到WeatherCard中
    // const {others, setOthers} = useState()
    // useEffect(()=>{
    //     // get data from API
    // },[])

    // const [others, setOthers] = useState()
    // const [loading, setLoading] = useState(true)
 
    if (!others || loading) {
        // Render loading state or return null if you don't want to render anything
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* <CityList cityName={'Sydney'} temperature={15} weather={{code:'04n', name:'Clouds'}}/>
            <CityList cityName={'Melbourne'} temperature={17} weather={{code:'04n', name:'Clouds'}}/>
            <CityList cityName={'Brisbane'} temperature={17} weather={{code:'10d', name:'Rain'}}/>
            <CityList cityName={'Perth'} temperature={18} weather={{code:'01d', name:'Clear'}}/> */}
            {
                others?.map(({name, main, weather})=>{
                    return (
                        <CityList 
                            key={name} 
                            cityName={name} 
                            temperature={main.temp.toFixed(0)} 
                            weather={weather}
                            loading={loading}
                        />
                    )
                })
            }
        </div>
    )
}

export default OtherCities