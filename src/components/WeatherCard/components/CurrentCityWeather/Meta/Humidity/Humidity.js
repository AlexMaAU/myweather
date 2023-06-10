const Humidity = ()=>{
    return (
        // Humidity 和 Wind 组件样式一致，也可以复用，所以增加一个新的复用组件 MetaSection
        // 一般来说，定义组件的时候都会直接给其外面套上一个容器，比如<div>
        <div className="flex-1 text-slate-500 text-xl">
            <div className="text-center">Humidity</div>
            <div className="text-center">86</div>
        </div>
    )
}

export default Humidity