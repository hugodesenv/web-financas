import { LoremIpsum } from "lorem-ipsum";
import './style.css';

interface IPropsModal {
  isOpen: boolean;
  onClose: () => void;
}

export default function MyModal(props: IPropsModal) {
  // teste do lorem ipsum... remover dps! By Hugo Souza
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 190,
      min: 4
    },
    wordsPerSentence: {
      max: 36,
      min: 4
    }
  });

  const onClose = (_: any) => props.onClose();

  /**
   * Função que permitirá não executar o onClose da div pai, caso o usuario
   * clique na div conteúdo do modal.
   * @param e 
   * @returns 
   */
  const onStopPropagation = (e: any) => e.stopPropagation();

  return props.isOpen &&
    <div className='my-modal' onClick={onClose}>
      <div className='my-modal-body' onClick={onStopPropagation}>
        <div className='my-modal-title'>
          <h4>Título aqui</h4>
          <button onClick={onClose}>X</button>
        </div>
        <div className='my-modal-content'>
          {lorem.generateParagraphs(7)}
        </div>
      </div>
    </div>;
}