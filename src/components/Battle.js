import styles from './Battle.module.css'
import TextBox from './TextBox'

function Battle({hp, hpn, playerNick, enemyNick, sprn, width, height, textLine}){
	return(
		<div className={styles.battle}>
			<p>{playerNick} hp: {hp} | {enemyNick} hp: {hpn}</p>
			<img className={styles.enemy_spr} src={sprn} width={width} height={height} alt="Enemy Sprite"/>
			<TextBox text={textLine}  />
		</div>
	)
}

export default Battle;