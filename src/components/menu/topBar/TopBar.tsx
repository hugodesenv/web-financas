function TopBar() {
  return (
    <div style={style.container}>
      <h4 style={style.title}>
        Home
      </h4>
    </div>
  )
};

const style = {
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottom: '2px solid #EFEFEF',
    display: 'flex',
    height: '42px',
    width: '100%',
  },
  title: {
    paddingLeft: '14px',
  }
};

export default TopBar;