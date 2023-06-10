import Temperature from '../../../Temperature'
import Weather from './Weather'
import Meta from './Meta'
import CityName from '../../../CityName'
import smallBg from '../../../../assets/bg_sm.jfif'
import BackgroundImage from '../../../BackgroundImage'

const CurrentCityWeather = ()=>{
    return (
        // BackgroundImage组件复用
        <BackgroundImage image={smallBg}>
            {/* 给组件外面嵌套一个容器(比如<div>)，然后通过该容器来设置其直系子元素的CSS */}
            <div className="flex justify-between py-16 px-24 gap-48 relative">
                <div>
                    <Temperature tempValue={16.79}/>
                    <Weather weatherValue={'Rain'}/>
                    <Meta/>
                </div>
                <CityName>Sydney</CityName>
                <div className='h-5 w-full bg-black/30 bottom-0 left-0 absolute' />
            </div>
        </BackgroundImage>
    )
}

export default CurrentCityWeather