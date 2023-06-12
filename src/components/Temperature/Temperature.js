const Temperature = ({tempValue, className})=>{
    return (
        /* 那么如果组件只是样式不同，数据类型是一样的，还可以考虑Temperature组件的做法，把样式提取出来，作为props导入 */
        // <div className="text-slate-500 text-7xl font-semibold">
        //     {`${tempValue} ℃`}
        // </div>
        <div className={className}>
            {`${tempValue} ℃`}
        </div>
    )
}

export default Temperature