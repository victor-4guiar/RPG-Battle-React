import styles from './TextBox.module.css'
import TextBoxControl from './TextBoxControl'

function TextBox({text, limit}){
	return(
		<div className={styles.box_model}>
			<p className={styles.text_model}>
				{text}
			</p>
		</div>
	)
}

export default TextBox;