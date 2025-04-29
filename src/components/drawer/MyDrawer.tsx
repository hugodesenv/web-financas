import "./style.css";

export interface IPropsMyDrawerCommom {
  isOpen: boolean;
  onClose: () => void;
}
export interface IPropsMyDrawer extends IPropsMyDrawerCommom {
  children?: any;
  title?: string;
  width?: any;
}

export default function MyDrawer(props: IPropsMyDrawer) {
  function onClickClose(e: any) {
    e.preventDefault();
    if (
      e.target.id === "mydrawer-background" ||
      e.target.id === "mydrawer-button-close"
    ) {
      props.onClose();
    }
  }

  function handleKeyDown(event: any) {
    if (event.code === "Escape") {
      props.onClose();
    }
  }

  const attributes = {
    wrapper: {
      autoFocus: true,
      id: "mydrawer-background",
      onClick: onClickClose,
      onKeyDown: handleKeyDown,
      tabIndex: 3,
    },
    wrapperContent: {
      className: "mydrawer-content-box mydrawer-content-open",
    },
    drawerHeader: {
      className: "mydrawer-header",
    },
    closeStyle: {
      id: "mydrawer-button-close",
      onClick: onClickClose,
    },
    childStyle: {
      className: "mydrawer-body",
    },
  };

  return (
    props.isOpen && (
      <div {...attributes.wrapper}>
        <div {...attributes.wrapperContent}>
          <div {...attributes.drawerHeader}>
            <h3>{props.title}</h3>
            <button {...attributes.closeStyle}>Fechar</button>
          </div>
          <div {...attributes.childStyle}>{props.children}</div>
        </div>
      </div>
    )
  );
}
