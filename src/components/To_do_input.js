import React, { useState, useEffect, useRef } from 'react';

function To_do_input(props) {

const [input, setInput] = useState(props.edicao ? props.edicao.value : '');

const inputRef = useRef(null)

useEffect(() => {
  inputRef.current.focus()
})

const mudarinput = e => {
  setInput(e.target.value);
}

const enviotarefas = e => {
  e.preventDefault();

  props.onSubmit({
    id: Math.floor(Math.random() * 10000),
    text: input
  });

  setInput('');
};

  return (
    <form className='to-do-form' onSubmit={enviotarefas}>
      {props.edicao ? (
        <>
      <input
        type='text' 
        placeholder='atualize sua tarefa' 
        value={input} 
        name='text' 
        className='to-do-input edicao'
        onChange={mudarinput}
        ref={inputRef}
      />
      <button className='to-do-button edicao'>Atualizar</button>
      </>
      ) : 
      (
      <>
      <input
        type='text' 
        placeholder='adicione sua nova tarefa' 
        value={input} 
        name='text' 
        className='to-do-input'
        onChange={mudarinput}
        ref={inputRef}
      />
      <button className='to-do-button'>Adicionar tarefa</button>
      </>
      )}

        
    </form>
  )
}

export default To_do_input