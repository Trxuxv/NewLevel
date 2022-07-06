import React from 'react';
import { BrowserRouter, Switch, Route, Link  } from 'react-router-dom'; 

import Api from '../../Api';

import { AreaLogin } from './styled';

import { BtnDefautIcons, BtnDefault } from '../../components/Styled';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

//eslint-disable-next-line
export default ({onReceiveGoogle}) => {

    const actionLoginGoogle = async () => 
    {
        let result = await Api.googleLogar();

        if(result)
        {
            onReceiveGoogle(result.user);
        }else
        {
            alert('Error'); 
        }
    }


    
    return(

        <BrowserRouter>

            <Switch>
                <Route exact path="/registrar">

                    <AreaLogin>

                        <h1 className="organize " >
                        <Link to="/"><ArrowBackIosIcon/></Link>    
                            Crie sua conta
                        </h1>
                        <p>Crie sua conta, é grátis!</p>

                        
                        <form>
                            <div className="form--input"> 
                                    <label> Nome </label>
                                    <input type="text" />
                            </div>

                            <div className="form--input"> 
                                    <label> E-mail </label>
                                    <input type="email" />
                            </div>

                            <div className="form--input"> 
                                    <label> Senha </label>
                                    <input type="password" />
                            </div>

                                <BtnDefault>Comece agora!</BtnDefault>
                        
                                <div className="footerLogin">
                                    Já tem uma conta ? 
                                    <Link to="/">Faça login</Link>
                                </div>
                        
                        </form>
                    
                    </AreaLogin>
                </Route>
                
                
                <Route exact path="*">
                    <AreaLogin>
                            <h1>Faça login em sua conta</h1>

                            <BtnDefautIcons onClick={actionLoginGoogle}>
                                <AccountCircleIcon/>
                                <div className="center">Fazer login com o Google</div>
                            </BtnDefautIcons>

                        <p>OU</p>

                        <form>
                            <div className="form--input"> 
                                    <label> E-mail </label>
                                    <input type="email" />
                            </div>

                            <div className="form--input"> 
                                    <label> Senha </label>
                                    <input type="password" />
                            </div>

                                <BtnDefault>Entrar</BtnDefault>
                        
                                <div className="footerLogin">
                                    Não tem uma conta ? 
                                    <Link to="/registrar">Registre-se</Link>
                                </div>
                        
                        </form>

                    </AreaLogin>
                </Route>               
            </Switch>
        
    </BrowserRouter>
    );
}