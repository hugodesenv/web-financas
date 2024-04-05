import './style.css';

interface IProps {
  title?: string,
  isOpen: boolean,
  width?: any,
}

export default function MyDrawer(props: IProps) {
  return props.isOpen && (
    <div id="mydrawer-background">
      <div className='mydrawer-content-box mydrawer-content-open'>
        <div className='mydrawer-header'>
          <h3>{props.title || "Testando aqui"}</h3>
          <button>X</button>
        </div>
        <span>
          Conteudo
        </span>
      </div>
    </div>
  );
}