//把默认导出的default成员从文件中导入，并且将其赋值给变量WeatherCard
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <WeatherCard/>
    </div>
  );
}

export default App;
