const CADASTRA_ITENS = "CADASTRA_ITENS";
const EXCLUI_ITENS = "EXCLUI_ITENS";

const stateInicial = {
  dataSource: []
};

function cadastraItens(state, action) {
  const obj = {
    key: (Math.random() * 100).toFixed(0),
    title: action.item
  };
  return { ...state, dataSource: [...state.dataSource, obj] };
}

function excluiItens(state, action) {
  return {
    ...state,
    dataSource: [...state.dataSource.filter(x => x.key !== action.item)]
  };
}

export default function reducerItens(state = stateInicial, action) {
  switch (action.type) {
    case "CADASTRA_ITENS":
      return cadastraItens(state, action);
    case "EXCLUI_ITENS":
      return excluiItens(state, action);

    default:
      return state;
  }
}

export function cadastroItemAction(item) {
  return {
    type: CADASTRA_ITENS,
    item
  };
}

export function excluiItensAction(item) {
  return {
    type: EXCLUI_ITENS,
    item
  };
}
