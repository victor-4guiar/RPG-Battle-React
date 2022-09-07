import styles from './Battle.module.css'
import TextBox from './TextBox/TextBox'

function Battle({hp, hpn, playerNick, enemyNick, sprn, width, height}){
	return(
		<div className={styles.battle}>
			<img className={styles.enemy_spr} src={sprn} width={width} height={height} alt="Enemy Sprite"/>
			<TextBox text={["Ven como eres", "Ven assí", "Grandma, take me home"]} limit="2" />
		</div>
	)
}

export default Battle;