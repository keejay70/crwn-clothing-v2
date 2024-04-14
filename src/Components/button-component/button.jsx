import './button.styles.scss';

const BTN_TYPE_CLASSES = {
    googleBtn: 'google-sign-in',
    invertedBtn: 'inverted',
}

const Button = ({children, btnType, ...otherProps}) => {
    return(
        <button className={`button-container ${BTN_TYPE_CLASSES[btnType]}`} {...otherProps}>
            {children}
        </button>
    );

}

export default Button;