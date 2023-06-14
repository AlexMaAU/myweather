import { useEffect, useState } from 'react'
import CityList from './CityList'

// const OTHER_CITIES = [
//     {name:'Sydney', temperature:12, weather:{code:'04n', name:'Clouds'}},
//     {name:'Brisbane', temperature:21, weather:{code:'10d', name:'Rain'}},
//     {name:'Perth', temperature:19, weather:{code:'01d', name:'Clear'}},
// ]

const OtherCities = ({others,loading})=>{
    //这里和Forecast一样，也可以把状态都提升到WeatherCard中
    // const {others, setOthers} = useState()
    // useEffect(()=>{
    //     // get data from API
    // },[])

    return (
        <div>
            {/* <CityList cityName={'Sydney'} temperature={15} weather={{code:'04n', name:'Clouds'}}/>
            <CityList cityName={'Melbourne'} temperature={17} weather={{code:'04n', name:'Clouds'}}/>
            <CityList cityName={'Brisbane'} temperature={17} weather={{code:'10d', name:'Rain'}}/>
            <CityList cityName={'Perth'} temperature={18} weather={{code:'01d', name:'Clear'}}/> */}
            {
                others?.map(({name, temperature, weather})=>{
                    return (
                        <CityList 
                            key={name} 
                            cityName={name} 
                            temperature={temperature} 
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