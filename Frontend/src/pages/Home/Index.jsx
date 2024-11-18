import { useEffect, useState, useRef } from 'react'
import './Styles.css'
import api from '../../services/api.js'


const Home = () => {
  let [variavel, setVariavel] = useState([])
  async function getData() {
    const dados = await api.get('/explorer')
    setVariavel(dados.data)
    
  }
  useEffect(() => {
    getData()
  }, [])
  const inputName = useRef()
  const inputFieldOfStudy = useRef()
  const inputExpeditionsParticipated = useRef()

  
  async function createData() {
    await api.post('/explorer', {
      name: inputName.current.value,
      fieldOfStudy: inputFieldOfStudy.current.value,
      expeditionsParticipated: inputExpeditionsParticipated.current.value
    })
    getData()
   }

   async function deleteData(_id) {
    await api.delete(`/explorer/${_id}`)
    getData()
  }

  

  return (
    <>
      <div className='container'>
        <form>
          <h1>Cadastrar Pesquisador</h1>
          <input placeholder='Digite seu nome completo' name='name' type='text' ref={inputName} />
          <input placeholder='Digite sua area de estudo' name='fieldOfStudy' type='text' ref={inputFieldOfStudy} />
          <input placeholder='Quantas saídas de campo participou' name='expeditionsParticipated' type='text' ref={inputExpeditionsParticipated} />
          <button type='button' onClick={createData}>Cadastrar Pesquisador</button>
        </form>
        {variavel.map((variavel) => (
          <div key={variavel._id} className='card'>
            <div>
              <p>Nome: <span>{variavel.name}</span></p>
              <p>Area de estudo: <span>{variavel.fieldOfStudy}</span> </p>
              <p>Expedições participadas: <span>{variavel.expeditionsParticipated}</span> </p>
              
            </div>
            <button onClick={() => deleteData(variavel._id)}>
                <img src="https://img.icons8.com/m_rounded/512/FFFFFF/filled-trash.png" alt="" />
              </button>
          </div>))}

      </div>
    </>
  )
}

export default Home
