import DayOfWeekList from './DayOfWeekList'

const Forecast = ()=>{
    return (
        <div className={"flex gap-4 justify-between mt-8"}>
            <DayOfWeekList dayOfWeek={'MON'} temperature={9} weather={{code:'11d', name:'Thunderstorm'}}/>
            <DayOfWeekList dayOfWeek={'TUE'} temperature={15} weather={{code:'01d', name:'Clear'}}/>
            <DayOfWeekList dayOfWeek={'WED'} temperature={11} weather={{code:'03d', name:'Clouds'}}/>
            <DayOfWeekList dayOfWeek={'THU'} temperature={7} weather={{code:'09d', name:'Rain'}}/>
            <DayOfWeekList dayOfWeek={'FRI'} temperature={8} weather={{code:'09d', name:'Rain'}}/>
        </div>
    )
}

export default Forecast