import { SlidingMenu } from "./Components/SlidingMenu/SlidingMenu";
import { ElasticSearch } from "./Components/ElasticSearch/ElasticSearch";
import RippleButton from './Components/RippleButton/RippleButton'

const App = () => {
  return (
    <div>
      <h1>Iniciar projeto</h1>
      <SlidingMenu />

      <ElasticSearch />

      <RippleButton />
    </div>
  );
}

 export default App;
