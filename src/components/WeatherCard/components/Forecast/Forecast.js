import { useState } from 'react'
import DayOfWeekList from './DayOfWeekList'

//为了map，定义一个字典数组
//发现这里的temperature、weather的值都应该是有外部传入的，所以CurrentCityWeather里的状态还需要再次提升
const FORECAST = [
    {name:'Mon', temperature:9, weather:{code:'11d', name:'Thunderstorm'}},
    {name:'TUE', temperature:15, weather:{code:'01d', name:'Clear'}},
    {name:'WED', temperature:11, weather:{code:'03d', name:'Clouds'}},
    {name:'THU', temperature:7, weather:{code:'09d', name:'Rain'}},
    {name:'FRI', temperature:8, weather:{code:'09d', name:'Rain'}},
]

const Forecast = ()=>{

    // Forecast一栏里，日期、温度、天气icon都是动态UI，那么就可以将其提取成一个整体，将整体作为state
    const [forecast, setForecast] = useState(FORECAST)

    return (
        <div className={"flex gap-4 justify-between mt-8"}>
            {/* 
            这里可以使用map，因为这里代码复制粘贴了
            <DayOfWeekList dayOfWeek={'MON'} temperature={9} weather={{code:'11d', name:'Thunderstorm'}}/>
            <DayOfWeekList dayOfWeek={'TUE'} temperature={15} weather={{code:'01d', name:'Clear'}}/>
            <DayOfWeekList dayOfWeek={'WED'} temperature={11} weather={{code:'03d', name:'Clouds'}}/>
            <DayOfWeekList dayOfWeek={'THU'} temperature={7} weather={{code:'09d', name:'Rain'}}/>
            <DayOfWeekList dayOfWeek={'FRI'} temperature={8} weather={{code:'09d', name:'Rain'}}/> */}
            {
                // 如果forecast存在，再进行map的写法
                forecast?.map(({name, temperature, weather})=>{
                    return (
                        <DayOfWeekList 
                        dayOfWeek={name} 
                        temperature={temperature} 
                        weather={weather}
                    />
                    )
                })
            }
        </div>
    )
}

export default Forecast