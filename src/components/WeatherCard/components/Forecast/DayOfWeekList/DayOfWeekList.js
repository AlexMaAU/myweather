import DayOfWeek from '../DayOfWeekList/DayOfWeek'
import WeatherIcon from '../../../../WeatherIcon'
import Temperature from '../../../../Temperature'

const DayOfWeekList = ({dayOfWeek, temperature, weather, loading})=>{
    return (
        <div className='min-w-[50px] text-center'>
            {loading?'...':(
                <div>
                    <DayOfWeek dayOfWeek={dayOfWeek}/>
                    <WeatherIcon weather={weather.name} code={weather.code} className={"my-4"}/>
                    <Temperature tempValue={temperature} className={"text-center text-base"}/>
                </div>
            )}
        </div>
    )
}

export default DayOfWeekList