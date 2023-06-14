import { useEffect, useState } from 'react'
import DayOfWeekList from './DayOfWeekList'

//为了map，定义一个字典数组
//发现这里的temperature、weather的值都应该是有外部传入的，所以CurrentCityWeather里的状态还需要再次提升
// const FORECAST = [
//     {name:'MON', temperature:9, weather:{code:'11d', name:'Thunderstorm'}},
//     {name:'TUE', temperature:15, weather:{code:'01d', name:'Clear'}},
//     {name:'WED', temperature:11, weather:{code:'03d', name:'Clouds'}},
//     {name:'THU', temperature:7, weather:{code:'09d', name:'Rain'}},
//     {name:'FRI', temperature:8, weather:{code:'09d', name:'Rain'}},
// ]

// const WEEK_DAYS = ['SUN','MON','TUE','WED','THU','FRI','SAT']

const Forecast = ({forecast,loading})=>{

    // 下面的代码和CurrentCityWeather组件中的重复了，说明这部分可以提取出去。但是CurrentCityWeather组件和Forecast是兄弟关系，两边都需要把状态再次提升。
    // Forecast一栏里，日期、温度、天气icon都是动态UI，那么就可以将其提取成一个整体，将整体作为state
    // const [forecast, setForecast] = useState(FORECAST)
    // const [loading, setLoading] = useState(true) 

    // const SYDNEY_GEO = {
    //     lat: -33.8698439,
    //     lon: 151.2082848
    // }
    // const units = 'metric'
    // const KEY = '2466213f21b4b723d341e00a430a7673'

    // useEffect(()=>{
    //     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${SYDNEY_GEO.lat}&lon=${SYDNEY_GEO.lon}&units=${units}&appid=${KEY}`)
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         const daily = data.daily.slice(1,6).map((day)=>{
    //             return {
    //                 // day.dt是时间戳，将一个时间戳乘以1000可以将其转换为以毫秒为单位的时间。
    //                 // new Date(day.dt * 1000)：使用时间戳创建一个新的Date对象。
    //                 // Date对象的getDay()方法返回一个0到6之间的整数，表示星期几。其中0代表星期日，1代表星期一，以此类推。
    //                 // WEEK_DAYS[...]：根据getDay()方法返回的值，从WEEK_DAYS数组或对象中获取对应的星期几的表示。这样可以根据索引值查找相应的星期几字符串。
    //                 name: WEEK_DAYS[new Date(day.dt * 1000).getDay()],
    //                 weather: {
    //                     code: day.weather[0].icon,
    //                     name: day.weather[0].main
    //                 },
    //                 temperature:day.temp.day.toFixed(0)
    //             }
    //         })

    //         setForecast(daily)
    //     })
    //     .finally(()=>{
    //         setLoading(false)
    //     })
    // })

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
                            key={name}
                            dayOfWeek={name} 
                            temperature={temperature} 
                            weather={weather}
                            loading={loading}
                        />
                    )
                })
            }
        </div>
    )
}

export default Forecast