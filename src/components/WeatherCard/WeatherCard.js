import CurrentCityWeather from './components/CurrentCityWeather'
import Forecast from './components/Forecast'
import OtherCities from './components/OtherCities'
import SubSection from '../SubSection'
import { useEffect, useState } from 'react'


//通过geo.js获取了所有城市的经纬度
// const CITIES = [
//     {name:'Melbourne', lat:-37.8142176, lon:144.9631608},
//     {name:'Sydney', lat:-33.8698439, lon:151.2082848},
//     {name:'Brisbane', lat:-27.4689682, lon:153.0234991},
//     {name:'Adelaide', lat:-34.9281805, lon:138.5999312},
//     {name:'Perth', lat:-31.9558964, lon:115.8605801},
//     {name:'Hobart', lat:-42.8825088, lon:147.3281233},
//     {name:'Darwin', lat:-12.46044, lon:130.8410469},
// ]

const SYDNEY_GEO = {
    lat: -33.8698439,
    lon: 151.2082848
}
const units = 'metric'
const KEY = '30552c1e8594ae98b41c25641fa95b1a'

// const FORECAST = [
//     {name:'MON', temperature:9, weather:{code:'11d', name:'Thunderstorm'}},
//     {name:'TUE', temperature:15, weather:{code:'01d', name:'Clear'}},
//     {name:'WED', temperature:11, weather:{code:'03d', name:'Clouds'}},
//     {name:'THU', temperature:7, weather:{code:'09d', name:'Rain'}},
//     {name:'FRI', temperature:8, weather:{code:'09d', name:'Rain'}},
// ]

const OTHER_CITIES = [
    {name:'Melbourne', lat:-37.8142176, lon:144.9631608},
    {name:'Brisbane', lat:-27.4689682, lon:153.0234991},
    {name:'Perth', lat:-31.9558964, lon:115.8605801}
]

const WEEK_DAYS = ['SUN','MON','TUE','WED','THU','FRI','SAT']

const WeatherCard = ()=>{
    // 把状态提升到WeatherCard组件中的时候，发现这时的状态命名出现问题，temValue等应该都是current city下的，如果还是这样命名，就变得不易读
    // 而且WeatherCard里并没有tempValue等的责任
    //const [tempValue, setTempValue] = useState()
    const [loading, setLoading] = useState(true)  //状态提升,from Temperature,子传父 (也可以是子组件提供回调函数，但是可读性可维护性较差)
    //const [weatherValue, setWeatherValue] = useState()  //状态提升，from Weather
    //const [humidityValue, setHumidityValue] = useState() 
    //const [windSpeed, setWindSpeed ] = useState()
    const [current, setCurrent] = useState() //上面的状态可以合并到current一个状态下
    const [forecast, setForecast] = useState()
    const [others, setOthers] = useState([])

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${SYDNEY_GEO.lat}&lon=${SYDNEY_GEO.lon}&units=${units}&appid=${KEY}`)
        .then((response)=>response.json())  //接收上一个Promise返回的response对象，并调用json()方法将返回的数据解析为JSON格式
        .then((data)=>{
            // set current state
            setCurrent(data.current)
            // setTempValue(data.current.temp)  //接收上一个Promise返回的解析后的JSON数据，将其中的current.temp设置为tempValue的值
            // setWeatherValue(data.current.weather[0].main)
            // setHumidityValue(data.current.humidity)
            // setWindSpeed(data.current.wind_speed)

            // set forecast state
            const daily = data.daily.slice(1,6).map((day)=>{
                return {
                    // day.dt是时间戳，将一个时间戳乘以1000可以将其转换为以毫秒为单位的时间。
                    // new Date(day.dt * 1000)：使用时间戳创建一个新的Date对象。
                    // Date对象的getDay()方法返回一个0到6之间的整数，表示星期几。其中0代表星期日，1代表星期一，以此类推。
                    // WEEK_DAYS[...]：根据getDay()方法返回的值，从WEEK_DAYS数组或对象中获取对应的星期几的表示。这样可以根据索引值查找相应的星期几字符串。
                    name: WEEK_DAYS[new Date(day.dt * 1000).getDay()],
                    weather: {
                        icon: day.weather[0].icon,
                        main: day.weather[0].main
                    },
                    temperature:day.temp.day.toFixed(0)
                }
            })
            setForecast(daily)

            // set other cities state
            const otherCityData = []
            OTHER_CITIES.map((city)=>{
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&units=${units}&appid=${KEY}`)
                .then((response)=>response.json())
                .then((data)=>{
                    otherCityData.push({name:city.name, temperature:data.current.temp.toFixed(0), weather:data.current.weather})
                })
            })
            setOthers(otherCityData)

            // const list = data.daily.map(({day})=>({
            //     name:,
            //     temperature: temp,
            //     weather: {
            //         code: weather[0].icon,
            //         name: weather[0].main
            //     }
            // }))
            
        })  
        .finally(()=>{
            // 做到这一步，发现 state 定义在 Temperature 组件里，这里没办法setLoading，那就把状态提升
            setLoading(false)   //当全部数据加载完之后，改变loading状态，让页面显示内容从 loading 到 获取的数据
        })
    }, [])

    return (
        // 给组件外面嵌套一个容器(比如<div>)，然后通过该容器来设置其直系子元素的CSS
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            {/* current可能因为API读取不到而为空值，所以要加上？进行判断 */}
            {/* CurrentCityWeather的可读性可以再次提升，可以和Forecast和OtherCities组件一样，直接把整个current作为props传入，这样保证了代码的一致性 */}
            <CurrentCityWeather tempValue={current?.temp} loading={loading} weatherValue={current?.weather[0].main} humidityValue={current?.humidity} windSpeed={current?.wind_speed}/>
            {/* 给组件外面嵌套一个容器(比如<div>)，然后通过该容器来设置CSS。 */}
            <div className="flex gap-12 px-12 py-9 justify-center">
                {/* OtherCities 和 Forecast的UI格式是一样的，都是 Title+Element, 这部分也可以提取出来，新增一个组件叫 SubSection */}
                {/* 
                    <OtherCities/>
                    <div className='w-[3px] bg-black/20' />
                    <Forecast/>
                */}
                <SubSection title={'OTHER CITIES'}>
                    <OtherCities others={others} loading={loading}/>
                </SubSection>
                <div className='w-[3px] bg-black/20' />
                <SubSection title={'FORECAST'}>
                    <Forecast forecast={forecast} loading={loading}/>
                </SubSection>
            </div>
        </div>
    )
}

export default WeatherCard