import React from 'react';

import Particles from 'react-particles-js';

import './signin.styles.scss';

const particlesOption = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 200
        }
      }
    }
  }

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    render(){
        return(
            <article className="signin-container">
                <Particles className='particles' params={particlesOption}/>
                <main className="signin-form">
                    <div className="form-container">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Prihlásenie</legend>
                        <div className="input-field">
                            <label className="input-label" htmlFor="email-address">Uživatelské meno</label>
                            <input className="input-signin" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="input-field">
                            <label className="input-label" htmlFor="password">Heslo</label>
                            <input className="input-signin" type="password" name="password"  id="password" />
                        </div>
                        </fieldset>
                        <div className="submit-btn">
                            <input 
                            className="signin-btn" 
                            type="submit" 
                            value="Prihlásiť sa" 
                            onClick={this.props.handleLogIn}
                            />
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}


export default SignIn;