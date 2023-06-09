import CurrentCityWeather from './components/CurrentCityWeather'
import Forecast from './components/Forecast'
import OtherCities from './components/OtherCities'

const WeatherCard = ()=>{
    return (
        // 给组件外面嵌套一个容器(比如<div>)，然后通过该容器来设置其直系子元素的CSS
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            <CurrentCityWeather/>
            {/* 给组件外面嵌套一个容器(比如<div>)，然后通过该容器来设置CSS。 */}
            <div className="flex">
                <OtherCities/>
                <Forecast/>
            </div>
        </div>
    )
}

export default WeatherCard