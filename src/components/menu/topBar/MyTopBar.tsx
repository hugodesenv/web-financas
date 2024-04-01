function MyTopBar({ title, children }: any) {
  return (
    <div style={style.title_container}>
      <h4 style={style.title}>
        {title}
      </h4>
    </div>
  )
};

const style = {
  title_container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottom: '2px solid #EFEFEF',
    display: 'flex',
    height: '42px',
    width: '100%',
  },
  title: {
    paddingLeft: '14px',
  },
};

export default MyTopBar;