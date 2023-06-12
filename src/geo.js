const axios = require('axios')

//小脚本，从API中返回CITIES数组中每个城市的经纬度
const CITIES = [
    'Melbourne', 'Sydney', 'Brisbane', 'Adelaide', 'Perth', 'Hobart', 'Darwin'
]

const main = async ()=>{
    console.log('Get Start')
    
    const fetchGeos = CITIES.map((city)=>{
        // axios.get(参数1，参数2) 函数的第一个参数是一个 URL 字符串，指定要发送 GET 请求的目标地址。而第二个参数是一个包含配置选项的对象。
        return axios.get('https://api.openweathermap.org/geo/1.0/direct', {
            params: {
                q: `${city}, Australia`,
                limit: 1,
                appid: '2466213f21b4b723d341e00a430a7673'
            }
        }).then((response)=>response.data)
    })

    // 一次处理多个Promise，要用Promise.all()
    const result = await Promise.all(fetchGeos)
    console.log('result', result)
    result.forEach((item)=>{
        console.log(item[0].name, item[0].lat, item[0].lon)
    })
}

main()