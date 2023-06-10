import Humidity from "./Humidity"
import Wind from "./Wind"
import MetaSection from "../../../../MetaSection"

const Meta = ()=>{
    return (
        <div className="flex justify-center mt-5">
            {/* Humidity 和 Wind 组件样式一致，也可以复用，所以增加一个新的复用组件 MetaSection */}
            {/* 
                <Humidity/>
                <Wind/>
            */}
            <MetaSection title={'HUMIDITY'} value={'81'} unit={'%'}/>
            <MetaSection title={'WIND'} value={'2.57'} unit={' K/M'}/>
        </div>
    )
}

export default Meta