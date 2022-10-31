import styles from "./Home.module.scss"
import Mapa from "../../components/Mapa";
import Finalizado from "../../components/Finalizado"

import { motion } from "framer-motion"


import { useState, useEffect } from 'react'
import { fetchData } from "../../utils/fetchData"

import { BsPencil } from 'react-icons/bs';

const Home = () => {


    const clearInput = document.querySelectorAll(".clearInput")

    const [country, setCountry] = useState([])
    const [city, setCity] = useState([])

    const [valueCountry, setValueCountry] = useState()
    const [valueCity, setValueCity] = useState()

    const [mensagemFinal, setmensagemFinal] = useState(false)

    useEffect(() => {
        fetchData("https://amazon-api.sellead.com/country")
            .then((data) => setCountry(data))
    }, []);

    useEffect(() => {
        fetchData("https://amazon-api.sellead.com/city")
            .then((data) => setCity(data))
    }, []);

    if (!country && !city) return "loading..."

    const handleSubmit = (e) => {
        e.preventDefault()
        clearInput.forEach(input => input.value = "")
        setmensagemFinal(true)
    }



    return (
        <div className={styles.motherDiv}>

            {mensagemFinal &&  <Finalizado />}
           
            <Mapa city={valueCity} />

            <motion.div className={styles.formDiv} drag
                dragConstraints={{
                    top: -100,
                    left: -100,
                    right: 100,
                    bottom: 100,
                }}>

                <form onSubmit={handleSubmit}>
                    <label htmlFor='nome'>Nome</label>
                    <input type="text" required className="clearInput" />

                    <label htmlFor='email'>Email</label>
                    <input type="email" required className="clearInput" />

                    <label htmlFor='telefone'>Telefone</label>
                    <input type="tel" required className="clearInput" />

                    <label htmlFor='cpf'>CPF</label>
                    <input type="number" required className="clearInput" />


                    <label htmlFor='pais'>Escolha um pais</label>
                    <select name="pais" id="pais" onChange={e => setValueCountry(e.target.value)} required>

                        {!valueCountry &&
                            <option value="" key="">
                                Selecione o pais
                            </option>
                        }

                        {country.map((pais, index) => {
                            return (
                                <option value={pais.code} key={index}>
                                    {pais.name}
                                </option>
                            )
                        })}

                    </select>
                    <label htmlFor='cidade'>Escolha uma cidade</label>
                    <select name="cidade" id="cidade" onChange={e => setValueCity(e.target.value)} required>

                        <option value="" key="">
                            Selecione a cidade
                        </option>

                        {city.filter((city) => city.country_code === valueCountry && city.log && city.lat).map((cidade) => {
                            return (
                                <option value={[cidade.lat, cidade.log]} key={cidade.id}>
                                    {cidade.name}
                                </option>
                            )
                        })}
                    </select>

                    <button type='submit'><BsPencil /> Enviar</button>
                </form>
                
            </motion.div>
        </div>
    )
}

export default Home