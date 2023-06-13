import { useState } from "react"

const Temperature = ({tempValue, className, loading})=>{

    // const [ loading, setLoading] = useState(true)  //state lifted

    return (
        /* 那么如果组件只是样式不同，数据类型是一样的，还可以考虑Temperature组件的做法，把样式提取出来，作为props导入 */
        // <div className="text-slate-500 text-7xl font-semibold">
        //     {`${tempValue} ℃`}
        // </div>
        <div className={className}>
            {/* 数据未加载完成时，应该有个loading的显示，增加用户体验 */}
            {/* 这时就发现一个新的UI变化，loading -> data，那么就增加新的 loading 状态 */}
            {loading ? '...':`${tempValue} ℃`}
        </div>
    )
}

export default Temperature