/* eslint-disable react/jsx-pascal-case */
import React, {useState} from 'react';
import To_do from './To_do';
import To_do_input from './To_do_input';

function To_do_Lista() {
    const [Tarefas, setarTarefas] = useState([]);

    const AdicionarTarefa = tarefa => {
      if(!tarefa.text || /^\s*$/.test(tarefa.text)) {
        return;
      }

      const NovasTarefas = [tarefa, ...Tarefas];

      setarTarefas(NovasTarefas);
    };

    const atualizarTarefas = (tarefaID, novoValue) => {
      if(!novoValue.text || /^\s*$/.test(novoValue.text)) {
        return;
    }

    setarTarefas(prev => prev.map(item => (item.id === tarefaID ? novoValue : item)))
  }

    const removerTarefa = id => {
      const removerArr = [...Tarefas].filter(tarefa => tarefa.id !== id);

      setarTarefas(removerArr);
    };

    const tarefaCompleta = id => {
      let atualizarTarefas = Tarefas.map(tarefa => {
        if (tarefa.id === id) {
          tarefa.estaCompleto = !tarefa.estaCompleto;
        }
        return tarefa;
      })
      setarTarefas(atualizarTarefas);
    }

  return (
    <div>
        <h1>Diga-me quais são seus planos de hoje!</h1>
        <To_do_input onSubmit={AdicionarTarefa} />
        <To_do tarefas={Tarefas} tarefaCompleta={tarefaCompleta} removerTarefa={removerTarefa} atualizarTarefas={atualizarTarefas}/>
    </div>
  )
}

export default To_do_Lista;