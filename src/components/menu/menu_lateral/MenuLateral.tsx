import { MdExitToApp, MdOutlineAccountBalanceWallet, MdOutlineAutoGraph, MdOutlineSettings, MdPriceCheck } from 'react-icons/md';
import './estilo.css';

function MenuLateral() {
  const menus = [
    {
      icone: <MdOutlineAccountBalanceWallet fontSize={20} />,
      descricao: 'Cadastro',
    },
    {
      icone: <MdPriceCheck fontSize={20} />,
      descricao: 'Contas a pagar',
    },
    {
      icone: <MdOutlineAutoGraph fontSize={20} />,
      descricao: 'Relatório',
    },
    {
      icone: <MdOutlineSettings fontSize={20} />,
      descricao: 'Configuração',
    },
  ];

  return (
    <div className='menu-container'>
      <ul className='menu'>
        {
          menus.map(el =>
            <li>
              <div>
                {el.icone}
              </div>
              <span>{el.descricao}</span>
            </li>
          )
        }
      </ul>
      <ul className='menu container-menu-rodape'>
        <li>
          <div>
            <MdExitToApp fontSize={20} />
          </div>
          <span>Sair</span>
        </li>
      </ul>
    </div>
  )
}

export default MenuLateral;