import {create} from 'tailwind-rn';
import styles from './tailwind.styles.json';

const {tailwind, getColor} = create(styles);
const tw = classNames => tailwind([classNames].join(''));

export {tw, getColor};
