import React, { useState } from 'react';
import './index.scss';
import Modal from './components/Modal';




function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
      <Modal open={open} setOpen={setOpen} >
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt="media" />
      </Modal>
    </div >
  );
}

export default App;
