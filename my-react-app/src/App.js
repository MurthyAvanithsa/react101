import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [playlist, setPlaylist] = React.useState(null);

  React.useEffect(() => {
    fetch('https://tbn-dsp-api-prod.tbncloud.com/v2/playlist?playlistid=KlFlsAns&page_limit=10&page_offset=1')
      .then(response => response.json())
      .then(data => setPlaylist(data))
      .catch(error => console.error('Error fetching playlist:', error));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {
          playlist && playlist.entry.map(item => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </div>
          ))
        }
        <p>This is cool.</p>
      </header>
    </div>
  );
}

export default App;
