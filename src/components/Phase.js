import styles from './Phase.module.css'

function Phase() {
    return (
        <div className={styles.phaseContainer}>
            <p className={styles.phaseContent}>
                This is a component with a phase!
            </p>
        </div>
    )
}

export default Phase;