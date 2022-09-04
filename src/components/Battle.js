import styles from './Battle.module.css'

function Battle({hp, hpn, playerNick, enemyNick, sprn, width, height}){
	return(
		<div className={styles.battle}>
			<p>{playerNick} hp: {hp} | {enemyNick} hp: {hpn}</p>
			<img src={sprn} width={width} height={height} alt="Enemy Sprite"/>
		</div>
	)
}

export default Battle;