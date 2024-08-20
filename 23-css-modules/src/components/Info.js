import './Info.css';
import styles from './Info.module.css';

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <h2>heading in the Info comp</h2>
      <button className="my-button">Click me</button>
    </div>
  );
}

export default Info;
