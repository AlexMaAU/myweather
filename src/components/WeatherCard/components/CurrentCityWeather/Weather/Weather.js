import { useState } from "react"

const Weather = ({weatherValue, loading})=>{

    //const [weatherValue, setWeatherValue] = useState() - state lifted

    return (
        // 不要滥用Flex，flex只应该用来布局
        <div className="text-center mt-2">
            {/* 这里为什么加个<span>？
            这样可以使得样式责任和布局责任分开，<div>只负责布局责任，<span>负责样式责任 */}
            <span className="text-slate-500 text-2xl">
                {loading?'...':`${weatherValue}`}
            </span>
        </div>
    )
}

export default Weather