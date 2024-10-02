import { Header } from './components/Header';
import { EditorListItems } from './components/editorComponents/EditorItems';
import { ResultPage } from './components/ResultPage';
import { ListItem } from './components/list/ListItems';

function App() {
  return (
    <div className=" bg-white rounded-2xl">
      <Header/>
      <main className='flex items-start xs:flex-wrap'>
        <EditorListItems/>
        <ListItem/>
        <ResultPage/>
      </main>
    </div>
  );
}

export default App;
