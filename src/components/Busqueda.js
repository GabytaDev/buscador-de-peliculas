import { useNavigate } from "react-router-dom";
import { useState} from "react";
import "../styles/_Busqueda.scss";

const Busqueda = () => {
    const navigate = useNavigate();
    const [valorDelInput, setValorDelInput] = useState("")
  
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/buscar/${valorDelInput}`)
       
    }
    const handleChange = (e) => {
        setValorDelInput(e.target.value)
    }
    


    return (
        <div>
            <form onSubmit={handleSubmit} className="form-submit">
                <label>
                    <input type="text"
                    onChange={handleChange}
                    className="input-style"
                    value={valorDelInput}
                    aria-label="escribe la busqueda">
                    </input>
                </label>
                <label>
                    <input type="submit" 
                    value="Buscar" 
                    className="btn-style" 
                    aria-label="buscar">
                    </input>
                </label>
            </form>
           
        </div>

    )
}
export default Busqueda;