import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../service/api'

import './style.css'
import { FiLogIn } from 'react-icons/fi'

import HerosImg from '../../assets/heroes.png'
import Logo from '../../assets/logo.svg'

export default function Logon() {
    const [id, setId] = useState('')

    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('/session', { id })

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')

        }catch(err) {
            alert('Falha no Login, tente novamente')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={Logo} alt="Be The Hero"/>

                <form action="">
                    <h1>Faça sua logon</h1>

                    <input type="text" placeholder='Sua ID'
                        value={id}
                        onChange={e => setId(e.target.value)}/>

                    <button onClick={handleLogin} className='button' type='submit'>Entrar</button>

                    <Link className='back-link' to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não Tenho Registro
                    </Link>
                </form>
            </section>

            <img src={HerosImg} alt="Heroes"/>
        </div>
    )
}