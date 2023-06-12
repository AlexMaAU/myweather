import CityList from './CityList'

const OtherCities = ()=>{
    return (
        <div>
            <CityList cityName={'Sydney'} temperature={15} weather={{code:'04n', name:'Clouds'}}/>
            <CityList cityName={'Melbourne'} temperature={17} weather={{code:'04n', name:'Clouds'}}/>
            <CityList cityName={'Brisbane'} temperature={17} weather={{code:'10d', name:'Rain'}}/>
            <CityList cityName={'Perth'} temperature={18} weather={{code:'01d', name:'Clear'}}/>
        </div>
    )
}

export default OtherCities