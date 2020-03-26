import React, { useState } from  'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

import api from '../../service/api'

import { FiArrowLeft } from 'react-icons/fi'

import './style.css'

export default function NewIncident(params) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongId = localStorage.getItem('ongItem')
    const history = useHistory()

    async function handleNewIncident(e) {
        e.preventDefault()

        const data = {
            title, description, value
        }

        try {
            await api.post('/incidents', data, {
                headers: {
                    auth: ongId
                }
            })
            alert('Caso Cadastrado com sucesso')
            history.push('/profile')
        } catch (error) {
            alert('erro ao cadastrar caso, tente novamente')
        }
    }

    return (
        <div className='new-incident'>
            <div className="content">
                <section>
                    <img src={Logo} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

                    <Link className='back-link' to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                       Voltar para a Home
                    </Link>
                </section>

                <form>
                    <input 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder='Titulo do Caso' />
                    <textarea 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    placeholder='Descrição' />
                    <input 
                    value={value}
                        onChange={e => setValue(e.target.value)}
                    placeholder='Valor em Reais' />

                    <button onClick={handleNewIncident} className="button" type='submit'>
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}