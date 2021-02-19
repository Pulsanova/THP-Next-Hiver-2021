import './index.scss';

const Input = ({ type, name }) => (
    <input className="Input" type={type} name={name} autoComplete="off" />
);

export default Input;
