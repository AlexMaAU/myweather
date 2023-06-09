import CurrentCityWeather from './components/CurrentCityWeather'
import Forecast from './components/Forecast'
import OtherCities from './components/OtherCities'

const WeatherCard = ()=>{
    return (
        <div>
            WeatherCard
            <CurrentCityWeather/>
            <OtherCities/>
            <Forecast/>
        </div>
    )
}

export default WeatherCard