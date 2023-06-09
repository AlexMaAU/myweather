import Temperature from '../../../Temperature'
import Weather from './Weather'
import Meta from './Meta'
import CityName from '../../../CityName'

const CurrentCityWeather = ()=>{
    return (
        <>
            CurrentCityWeather
            <Temperature/>
            <Weather/>
            <Meta/>
            <CityName/>
        </>
    )
}

export default CurrentCityWeather