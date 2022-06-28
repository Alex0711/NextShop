import React, { useRef } from 'react';
import '../styles/Login.scss';
import yardSale from "@logos/logo_yard_sale.svg"

const Login = () => {

	const form = useRef(null); //Traigo el formulario USANDO LA REFERENCIA 
	//y lo inicializo como null. Ahora esto va a estar observando todos los cambios
	//y puedo acceder en cualquier momento a estos datos con form.current

	const handleSubmit = (event) => {
		event.preventDefault(); //Esto evita que se manden los datos por url
		//y que se ejecute sólo el codigo que sigue ==>

		const formData = new FormData(form.current) //Uso FormData para agregar
		//seguridad a mi código. Y le paso los datos del formulario con el método current

		const data = {  //Ahora puedo acceder a estos datos con el método get
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={yardSale} alt="logo" className="login-logo" />
				{/* Acá está la referencia al formulario */}
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					{/* Cambio los id por name (porque estoy usando react ;) */}
					<input type="text" name="email" placeholder="alex.senger@hotmail.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					{/* cambio el input por un button para que trabaje de la forma que necesito */}
					<button type="submit" 
					  className="primary-button login-button"
					  onClick={handleSubmit}>
					  "Log in"
					</button>
					
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button">Sign up</button>
			</div>
		</div>
	);
}

export default Login;