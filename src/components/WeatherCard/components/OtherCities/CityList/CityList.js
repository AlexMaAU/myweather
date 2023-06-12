import OtherCityName from './OtherCityName'
import Temperature from '../../../../Temperature'
import WeatherIcon from "../../../../WeatherIcon"

const CityList = ({cityName,temperature,weather})=>{
    return (
        <div className={"flex items-center"}>
            {/* 发现了问题：之前的树状结构图中，把CityName全部划分成了一个组件，但是实际做到这一步的时候，发现这里的City Name的UI样式完全不一样。
            这样很正常，那就单独给OtherCities再新增一个组件OtherCityName就可以了。
            做前端不要想太多，一步一步做下去，遇到需求再解决需求。
             */}
            {/* 做到这步，发现CurrentCityName的样式和目前的复用组件CityName不一样，那就新增一个组件CurrentCityName */}
            {/* 如果CityName不再是复用组件，就要放回合适的文件夹位置下 */}
            <OtherCityName cityName={cityName}/>
            {/* 那么如果组件只是样式不同，数据类型是一样的，还可以考虑Temperature组件的做法，把样式提取出来，作为props导入 */}
            <Temperature className={"text-xl"} tempValue={temperature}/>
            <WeatherIcon code={weather.code} weather={weather.name} className={""}/>
        </div>
    )
}

export default CityList