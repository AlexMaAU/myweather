// { image, children } 就是把props解构了，等同于 props.image, props.children
const BackgroundImage = ({
    image,
    children
})=>{
    return (
        // 这个部分是BackgroundImage组件
        // 要把props.image传递进来是因为组件中需要用到
        <div 
            style={{backgroundImage: `url(${image})`}}
            className="bg-no-repeat bg-cover"
        >
            {/* 把props.children传递进来是因为上层组件App.js中BackgroundImage组件内有嵌套其他元素，
            如果这里不把children也按照格式嵌套到<div>中，那么从App.js开始拼接HTML的时候，到这里就会不知道<div>里面有没有其他内容 */}
            {children}
        </div>
    )
}

export default BackgroundImage