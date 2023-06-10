const MetaSection = ({title, value, unit})=>{
    return (
        <div className="flex-1 text-slate-500 text-xl">
            <div className="text-center">{title}</div>
            <div className="text-center">{value}{unit}</div>
        </div>
    )
}
 export default MetaSection