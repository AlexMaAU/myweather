const MetaSection = ({title, value, unit, loading})=>{
    return (
        <div className="flex-1 text-slate-500 text-xl text-center">
            <div className="text-center">{title}</div>
            {
                loading?'...':(
                    <div className="text-center">
                        {value}{unit}
                    </div>
                )
            }
        </div>
    )
}
 export default MetaSection