const Temperature = ({tempValue})=>{
    return (
        <div className="text-slate-500 text-7xl font-semibold">
            {`${tempValue} ℃`}
        </div>
    )
}

export default Temperature