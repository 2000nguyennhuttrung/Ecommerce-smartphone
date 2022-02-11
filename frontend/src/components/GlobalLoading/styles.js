import theme from './../../commons/Theme';

const styles = () => ({
  globalLoading: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 99,
    background: 'rgba(0,0,0,0.4)',
  },
  icon: {
    position: 'fixed',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    top: '50%',
    transform: "translateY(-50%)",
    width: 100,
  }
});

export default styles;

