import { Link } from 'react-router-dom'; 


import {AreaHeader} from './styled';

function Header(props)
{
    return (
        <AreaHeader>
            <div className="container"> 
                <div className="logo">
                    
                </div>

                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/config">Configurações</Link></li>
                        <li><Link to="/logout">Sair</Link></li>
                    </ul>

                    <div className="avatar">
                        <img alt="Foto de perfil" src={props.user.avatar} />

                        <label>
                            {props.user.name}
                              <div className="emaildir">
                              {props.user.email} 
                              </div>
                        </label>                        

                    </div>

                </nav>
            </div>    
        </AreaHeader>
    );
}

export default Header;