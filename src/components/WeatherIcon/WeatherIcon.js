const WeatherIcon = ({
    weather,
    code,
    className
})=>{
    return (
        <img 
            src={`http://openweathermap.org/img/wn/${code}.png`} 
            alt={weather} 
            className={className}
        />
    )
}

export default WeatherIcon