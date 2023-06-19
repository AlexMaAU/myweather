import OtherCityName from './OtherCityName'
import Temperature from '../../../../Temperature'
import WeatherIcon from "../../../../WeatherIcon"
import React from 'react'
import cityList from '../CityList'


const CityList = ({cityName,temperature,weather,loading,cityList,changeCurrentCity})=>{
    const city = cityList.filter((list)=>{
        return list.name == cityName
    })

    console.log(city[0])

    return (
        <div className={"flex items-center text-center justify-between"}>
            {/* 发现了问题：之前的树状结构图中，把CityName全部划分成了一个组件，但是实际做到这一步的时候，发现这里的City Name的UI样式完全不一样。
            这样很正常，那就单独给OtherCities再新增一个组件OtherCityName就可以了。
            做前端不要想太多，一步一步做下去，遇到需求再解决需求。
             */}
            {/* 做到这步，发现CurrentCityName的样式和目前的复用组件CityName不一样，那就新增一个组件CurrentCityName */}
            {/* 如果CityName不再是复用组件，就要放回合适的文件夹位置下 */}
            {loading?'...':(
                // Step 5: 添加反向数据流，就是把父级组件中的setState作为prop传递下去，在需要使用的子组件内注册事件，通过回调函数实现子组件调用父组件的setState方法
                <button className='flex items-center w-[230px] justify-around' onClick={()=>{changeCurrentCity(city[0])}}>
                    <OtherCityName cityName={cityName}/>
                    {/* 那么如果组件只是样式不同，数据类型是一样的，还可以考虑Temperature组件的做法，把样式提取出来，作为props导入 */}
                    <Temperature className={"text-xl"} tempValue={temperature}/>
                    <WeatherIcon code={weather[0].icon} weather={weather[0].main} className=""/>
                </button>
            )}
        </div>
    )
}

export default CityList