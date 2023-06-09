//把默认导出的default成员从文件中导入，并且将其赋值给变量WeatherCard
import WeatherCard from "./components/WeatherCard";
//技巧，JS中万物皆对象，所以可以直接导入背景图片对象，并赋值给bg
import bg from './assets/bg_large.jpg'
import BackgroundImage from "./components/BackgroundImage";

function App() {
  return (
    // 上层元素是对其子元素进行布局渲染等控制的，所以把BackgroundImage组件放在最上面，BackgroundImage负责渲染带有背景图片的容器(它的直系子元素<div>)
    // image和默认的children(父级组件<>之间的内容都是children)从BackgroundImage作为props传递下去
    <BackgroundImage image={bg} >
      {/* 下面这段代码，并不满足单一职责，<div>里负责了布局，还负责了背景图片渲染。背景图片本身就是复用组件，功能可以提取出来。
        <div 
          style={{backgroundImage: `url(${bg})`}}
          className="h-screen flex justify-center items-center bg-no-repeat bg-cover"
        >
      */}
      {/* <div>负责布局，控制它的直系子元素<WeatherCard/> 
      那么为什么要给WeatherCard组件前面加上<div>? 因为组件本身没办法给自己布局，组件里传递的是props，所以要对WeatherCard组件进行布局，就需要在外面再套一个容器
      */}
      <div className="h-screen flex justify-center items-center">
        <WeatherCard/>
      </div>
    </BackgroundImage>
  );
}

export default App;
