import CityName from "../../../../CityName"
import Temperature from "../../../../Temperature"
import WeatherIcon from "../../../../WeatherIcon"

const CityList = ()=>{
    return (
        <>
            {/* 发现了问题：之前的树状结构图中，把CityName全部划分成了一个组件，但是实际做到这一步的时候，发现这里的City Name的UI样式完全不一样。
            这样很正常，那就单独给OtherCities再新增一个组件OtherCityName就可以了。
            做前端不要想太多，一步一步做下去，遇到需求再解决需求。
             */}
            <CityName/>
            <WeatherIcon/>
        </>
    )
}

export default CityList