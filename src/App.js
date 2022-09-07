import Battle from './components/Battle';

function App() {
  return (
    <div className="App">
		<Battle 
		hp="100" 
		hpn="100" 
		sprn="https://64.media.tumblr.com/7f9a75b799a14dc7a2bc61ce705dedda/tumblr_lqpfuzvN2k1r0ralmo1_r4_500.gif" 
		enemyNick="Michael Jackson" 
		width="300"
		height="300"
		playerNick="Victor" 
		/>
    </div>
  );
}

export default App;
