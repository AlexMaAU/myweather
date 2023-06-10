const SubSection = ({children, title})=>{
    return (
        <div>
            <div className="text-2xl tracking-wider text-slate-500">{title}</div>
            <div className="text-slate-500 mt-4">{children}</div>
        </div>
    )
}

export default SubSection