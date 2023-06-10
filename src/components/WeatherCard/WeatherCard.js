import CurrentCityWeather from './components/CurrentCityWeather'
import Forecast from './components/Forecast'
import OtherCities from './components/OtherCities'
import SubSection from '../SubSection'

const WeatherCard = ()=>{
    return (
        // 给组件外面嵌套一个容器(比如<div>)，然后通过该容器来设置其直系子元素的CSS
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            <CurrentCityWeather/>
            {/* 给组件外面嵌套一个容器(比如<div>)，然后通过该容器来设置CSS。 */}
            <div className="flex px-12 py-9 justify-center">
                {/* OtherCities 和 Forecast的UI格式是一样的，都是 Title+Element, 这部分也可以提取出来，新增一个组件叫 SubSection */}
                {/* 
                    <OtherCities/>
                    <div className='w-[3px] bg-black/20' />
                    <Forecast/>
                */}
                <SubSection title={'OTHER CITIES'}>
                    <OtherCities/>
                </SubSection>
                <div className='w-[3px] bg-black/20' />
                <SubSection title={'FORECAST'}>
                    <Forecast/>
                </SubSection>
            </div>
        </div>
    )
}

export default WeatherCard