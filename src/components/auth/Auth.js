import React, { Component } from "react";
import styles from './Auth.css';
import { connect } from 'react-redux';
import { checkInputValid } from '../../services/validationService';
import { setFormValid, signUpUser } from "../../redux/actions/auth";

class Auth extends Component{
    constructor(props){
        super(props);
        this.email = React.createRef(); 
        this.password = React.createRef();
    }
    submitAuth = (e) => {
        e.preventDefault();
        const isValidEmail = checkInputValid(this.email);
        const isValidPassword = checkInputValid(this.password);
        this.props.setFormValid(isValidEmail, 'email');
        this.props.setFormValid(isValidPassword, 'password');
        if(this.props.email.valid && this.props.password.valid){
            const userData = {
                email: this.email.current.value,
                password: this.email.current.value,
                returnSecureToken: true
            }
            this.props.signUpUser(userData);
        }
    }
    render() {
    console.log(styles);
    console.log(this.props)
        const emailError = this.props.email && !this.props.email.valid ? 
            <div className={styles.error}>{this.props.email.error}</div> : 
            null
        const passwordError = this.props.password && !this.props.password.valid ? 
            <div className={styles.error}>{this.props.password.error}</div> : 
            null
        return(
            <form className={styles.Auth}>
                <div>Авторизація</div>
                <div className ={styles.webflowStyleInput}>
                    <label htmlFor="authEmail">Пошта</label>
                    <input 
                        type="email" 
                        name="authEmail"
                        id="authEmail" 
                        placeholder="Введіть електрону пошту"
                        ref={this.email}
                    />
                </div>
                {emailError}
                <div className ={styles.webflowStyleInput}>
                    <label htmlFor="authPassword">Пароль</label>
                    <input 
                    type="password" 
                    name="authPassword" 
                    id="authPassword" 
                    placeholder="Введіть пароль"
                    ref={this.password}
                />
                </div>
                {passwordError}
                <input type="submit"
                    name='Реєстрація'
                    onClick={this.submitAuth}    
                />
            </form>
        )
    }
}
function mapStateToProps(state){
    return{
        token: state.auth.token,
        email: state.auth.email,
        password: state.auth.password,
    }
}
function mapDispatchToProps(dispatch){
    return{
        setFormValid: (valid, inputType) => dispatch(setFormValid(valid, inputType)),
        signUpUser: (userData) => dispatch(signUpUser(userData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)