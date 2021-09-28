import { Meme } from './components/Meme';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {

  const {joke, error, loading} = useTypedSelector(state => state)
  
  if(loading) {
    return (
      <Meme data = {'Remember a joke...'} />
    );
  }else if(error) {
    return (
      <Meme data = {'Can`t remember a joke :('} />
    );
  }else{
    return (
      <Meme data = {joke} />
    );
  }
  
}

export default App;
