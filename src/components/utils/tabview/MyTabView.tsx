import { CSSProperties } from "react"

const style = {
  bodyTitle: {
    display: 'flex',
    cursor: 'pointer',
  } as CSSProperties,
  title: {
    border: '1px solid black',
  } as CSSProperties,
}

export function MyTabView() {
  const titles = [
    { caption: 'Primeira' },
    { caption: 'Segunda' },
  ];

  const content = [
    { child: <div>Primeiro conteúdo</div> },
    { child: <div>Segundo conteudo</div> },
  ];

  function onTitleClick(event: any, idx: number) {
    event.preventDefault();

  }

  return (
    <div>
      <ul style={style.bodyTitle}>
        {titles.map(({ caption }, idx: number) => (
          <li style={style.title} onClick={(e) => onTitleClick(e, idx)}>
            {caption}
          </li>
        ))}
      </ul>
      <ul>
        {content.map(({ child }) => <li>{child}</li>)}
      </ul>
    </div>
  )
}