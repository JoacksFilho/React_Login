import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import  {useContext} from "react";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const[name, setName] = useState('');
    const[password, setPassword] = useState('');
    const[phone, setPhone] = useState('');


    const handleLogin = async () =>{
        if(name && password && phone){
            const isLogged = await auth.signin(name, password, phone);
            if(isLogged){
                navigate('/');    
            }else{
                alert("Não deu certo. Tente outra vez!");
            }
        }
    }

    return(
        <div>
            <h2>Página Fechada</h2>

            <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)}
            placeholder="Nome"
            />
             <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
            />
             <input 
            type="text" 
            value={phone}
            onChange={e => setPhone(e.target.value)} 
            placeholder="Telefone"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}