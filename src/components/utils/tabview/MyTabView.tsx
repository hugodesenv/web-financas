import { useState } from "react";
import './style.css';

export function MyTabView() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const titles = [
    { caption: 'Primeira' },
    { caption: 'Segunda' },
    { caption: 'Terceira' },
  ];

  const content = [
    { child: <div>Primeiro conteúdo</div> },
    { child: <div>Segundo conteudo</div> },
    { child: <div>3 conteudo</div> },
  ];

  function onTitleClick(event: any, idx: number) {
    event.preventDefault();
    setCurrentIndex(idx);
  };

  return (
    <div>
      <ul className="mtv-title">
        {
          titles.map(({ caption }, idx: number) => (
            <li className={currentIndex === idx ? "mtv-title-selected" : ''} onClick={(e) => onTitleClick(e, idx)}>
              {caption}
            </li>
          ))
        }
      </ul>
      <ul className="mtv-container">
        <li>{content[currentIndex].child}</li>
      </ul>
    </div>
  )
}