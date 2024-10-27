import Content from './components/content/content';
import Header from './components/header/header';
import ModalWindow from './components/modal/modal';
import Navigator from './components/navigator/navigator';

import { ModalProvider } from './providers/modal';

function App() {
  return (
    <>
      <ModalProvider>
        <ModalWindow />
        <Header />
        <div className='flex'>
          <Navigator />
          <Content />
        </div>
      </ModalProvider>
    </>
  );
}

export default App;
