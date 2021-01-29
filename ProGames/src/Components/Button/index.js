import './index.scss';

const Button = (id, content, variant = null) => {
    const classNames = ['button', 'Button'];

    if (variant === 'primary') {
        classNames.push('button--primary');
    } else if (variant === 'secondary') {
        classNames.push('button--secondary');
    }

    if (variant === 'outlined') {
        classNames.push('Button--outlined');
    }

    return `<button class="${classNames.join(' ')}" id="${id}">${content}</button>`
};

export default Button;
