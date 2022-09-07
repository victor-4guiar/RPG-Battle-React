import styles from './TextBox.module.css'

function TextBox({text}){
	return(
		<div className={styles.box_model}>
			<p className={styles.text_model}>{text}</p>
		</div>
	)
}

export default TextBox;