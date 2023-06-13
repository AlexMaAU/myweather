import CurrentCityWeather from './components/CurrentCityWeather'
import Forecast from './components/Forecast'
import OtherCities from './components/OtherCities'
import SubSection from '../SubSection'

//通过geo.js获取了所有城市的经纬度
const CITIES = [
    {name:'Melbourne', lat:-37.8142176, lon:144.9631608},
    {name:'Sydney', lat:-33.8698439, lon:151.2082848},
    {name:'Brisbane', lat:-27.4689682, lon:153.0234991},
    {name:'Adelaide', lat:-34.9281805, lon:138.5999312},
    {name:'Perth', lat:-31.9558964, lon:115.8605801},
    {name:'Hobart', lat:-42.8825088, lon:147.3281233},
    {name:'Darwin', lat:-12.46044, lon:130.8410469},
]

const WeatherCard = ()=>{
    return (
        // 给组件外面嵌套一个容器(比如<div>)，然后通过该容器来设置其直系子元素的CSS
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            <CurrentCityWeather />
            {/* 给组件外面嵌套一个容器(比如<div>)，然后通过该容器来设置CSS。 */}
            <div className="flex gap-12 px-12 py-9 justify-center">
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