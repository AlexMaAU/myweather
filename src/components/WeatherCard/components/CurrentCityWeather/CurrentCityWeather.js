import React, { useEffect, useState } from 'react'
import Temperature from '../../../Temperature'
import Weather from './Weather'
import Meta from './Meta'
import CityName from '../../../CityName'
import smallBg from '../../../../assets/bg_sm.jfif'
import BackgroundImage from '../../../BackgroundImage'

//下面的代码需要再次状态提升，提升到WeatherCard.js
// const SYDNEY_GEO = {
//     lat: -33.8698439,
//     lon: 151.2082848
// }
// const units = 'metric'
// const KEY = '2466213f21b4b723d341e00a430a7673'

const CurrentCityWeather = ({tempValue, loading, weatherValue, humidityValue, windSpeed})=>{
    // 找到子组件接收的props来源的上层父级组件，在上层父级组件下设置 state - 状态提升
    // 比如Temperature的tempValue是个state，是从CurrentCityWeather中传下去的，就在CurrentCityWeather中定义state
    // const [tempValue, setTempValue] = useState()
    // const [loading, setLoading] = useState(true)  //状态提升,from Temperature,子传父 (也可以是子组件提供回调函数，但是可读性可维护性较差)
    // const [weatherValue, setWeatherValue] = useState()  //状态提升，from Weather
    // const [humidityValue, setHumidityValue] = useState() 
    // const [windSpeed, setWindSpeed ] = useState()
    
    // fetch from open weather api
    // API调用都是使用 useEffect 钩子
    // 问题：useEffect里的回调函数，有自己的责任，负责API数据读取，那么这部分也应该提取出来作为一个js文件 - 单一职责
    // useEffect(()=>{
    //     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${SYDNEY_GEO.lat}&lon=${SYDNEY_GEO.lon}&units=${units}&appid=${KEY}`)
    //     .then((response)=>response.json())  //接收上一个Promise返回的response对象，并调用json()方法将返回的数据解析为JSON格式
    //     .then((data)=>{
    //         console.log(data)
    //         setTempValue(data.current.temp)  //接收上一个Promise返回的解析后的JSON数据，将其中的current.temp设置为tempValue的值
    //         setWeatherValue(data.current.weather[0].main)
    //         setHumidityValue(data.current.humidity)
    //         setWindSpeed(data.current.wind_speed)
    //     })  
    //     .finally(()=>{
    //         // 做到这一步，发现 state 定义在 Temperature 组件里，这里没办法setLoading，那就把状态提升
    //         setLoading(false)   //当全部数据加载完之后，改变loading状态，让页面显示内容从 loading 到 获取的数据
    //     })
    // }, [])

    return (
        // BackgroundImage组件复用
        <BackgroundImage image={smallBg}>
            {/* 给组件外面嵌套一个容器(比如<div>)，然后通过该容器来设置其直系子元素的CSS */}
            <div className="flex justify-between py-16 px-24 gap-48 relative">
                <div>
                    <Temperature className={"text-slate-500 text-7xl font-semibold text-center min-w-[300px]"} tempValue={tempValue} loading={loading}/>
                    <Weather weatherValue={weatherValue} loading={loading}/>
                    <Meta humidityValue={humidityValue} windSpeed={windSpeed} loading={loading}/>
                </div>
                <CityName>Sydney</CityName>
                <div className='h-5 w-full bg-black/30 bottom-0 left-0 absolute' />
            </div>
        </BackgroundImage>
    )
}

export default CurrentCityWeather