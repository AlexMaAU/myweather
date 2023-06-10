const CityName = ({children})=>{
    return (
        // translateX(50%)时，元素会相对于其自身的宽度水平向右平移50%
        <div className="after:content-[''] after:h-[3px] after:w-1/2 after:bg-slate-400 after:block after:mt-2 after:text-center after:translate-x-1/2">
            <span className="text-slate-500 text-3xl text-right font-semibold">{children}</span>
        </div>
    )
}

export default CityName