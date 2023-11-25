import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CategoriaCreate = () => {
    const [nome, setNome] = useState('')
    const [ativa, setAtiva] = useState(false)
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/categorias-create', {
            nome, ativa
        })
            .then(res => {
                console.log(res);
                navigate('/categorias');
            }).catch(err => console.log(err));
    }

    return (
        <div className="text-18 w-full vh-100 justify-content-center">
            <div className="bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor=''>Nome</label>
                        <input type='text' className='form-control' placeholder='Digite o nome da categoria' onChange={e => setNome(e.target.value)} />
                    </div>
                    <fieldset className='mb-2'>
                        <legend htmlFor=''>Categoria ativa?</legend>
                        <div>
                            <input type='radio' id='true' name="active" value={true} onChange={e => setAtiva(e.target.value)} />
                            <label htmlFor='true'>Sim</label>
                        </div>
                        <div>
                            <input type='radio' id='false' name="active" value={false} onChange={e => setAtiva(e.target.value)} />
                            <label htmlFor='false'>Não</label>
                        </div>
                    </fieldset>
                    <button className='btn btn-success rounded-full text-center text-white'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default CategoriaCreate