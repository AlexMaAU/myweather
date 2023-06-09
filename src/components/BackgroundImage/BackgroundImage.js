// { image, children } 就是把props解构了，等同于 props.image, props.children
const BackgroundImage = ({
    image,
    children
})=>{
    return (
        <div 
            style={{backgroundImage: `url(${image})`}}
            className="bg-no-repeat bg-cover"
        >
            {children}
        </div>
    )
}

export default BackgroundImage