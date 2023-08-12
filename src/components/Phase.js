import styles from './Phase.module.css'

function Phase() {
    return (
        // how works the style css for component and example of how create one component different.
        <div className={styles.phaseContainer}>
            <p className={styles.phaseContent}>
                This is a component with a phase!
            </p>
        </div>
    )
}

export default Phase;