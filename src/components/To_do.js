/* eslint-disable react/jsx-pascal-case */
import React, {useState} from 'react';
import To_do_input from './To_do_input';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function To_do({tarefas, tarefaCompleta, removerTarefa, atualizarTarefas}) {
    const [edicao, setarEdicao] = useState({
        id: null,
        value: ''
    });

    const enviarAtualizaçao = value => {
        atualizarTarefas(edicao.id, value);
        setarEdicao({
            id: null,
            value: ''
        })
    }

    if (edicao.id) {
        return <To_do_input edicao={edicao} onSubmit={enviarAtualizaçao} />;
    }

    return tarefas.map((tarefa, index) => (
    <div
        className={tarefa.estaCompleto ? 'tarefa-row completo' : 'tarefa-row'}
        key={index}
    >

        <div key={tarefa.id} onClick={() => tarefaCompleta(tarefa.id)}>
            {tarefa.text}
        </div>
        <div className='icones'>
            <RiCloseCircleLine 
                onClick={() => removerTarefa(tarefa.id)}
                className='deletar-icone'
            />

            <TiEdit
                onClick={() => setarEdicao({ id: tarefa.id, value: tarefa.text})}
                className='editar-icone'
            />
        </div>
    </div>

  ))
}

export default To_do