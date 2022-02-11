const styles = () => ({
  root: {
    display: 'flex',
    height: '100%',
    marginTop: '15px'
  },
  title: {
    textAlign: 'center',
    // borderTop: "35px solid grey",
    backgroundColor: "rgba(128,128,128,0.5)",
    padding: "10px",
    borderRadius: "0px 0px 25px 25px"

  },
  imageList: {
    width: '50%',
    height: '100%',
    // borderTop: "1px solid rgba(128,128,128,0.5)",
    // borderLeft: "1px solid rgba(128,128,128,0.5)",
    // borderRight: "1px solid rgba(128,128,128,0.5)",
    // borderBottom: "1px solid rgba(128,128,128,0.5)",
    // borderRadius: "0px 0px 25px 25px"
  },
  img: {
    position: "relative",
    height: '385px',
    padding: "10px",
    left: "50%",
    transform: "translateX(-50%)"

  },
  modulesAndProp: {
    width: '50%',
  },
  controlModuleWrapper: {

  },
  btnBuy: {
    width: '100%',
    marginLeft: '15px',
    height: '100%',
    fontSize: '150%'
  },
  btnBuyWithTerm: {
    width: '100%',
    marginLeft: '15px',
    height: '100%',
    fontSize: '120%'
  },
  infoModuleWrapper: {
    marginLeft: '15px',
    marginTop: '15px',
    textAlign: 'center',
    height: '60%',
    width: '100%',
    paddingTop: '15px',
    paddingLeft: '15px',
    backgroundColor: 'rgba(170,198,198,0.2)',
    borderRadius: '5px'
  },
  videoAndDesc: {
    display: 'flex',
    marginTop: '15px',
    // Sua doi 12/2/2021
    height: '400px'
  },
  videoWrapper: {
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop: '25px',
    // height: '50%',
    width: '50%',
  },
  videoFrame: {
    position: 'absolute',
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
    height: '48.5%',
    width: '100%',
  },
  infoPhoneWrapper: {
    width: '50%',
    marginLeft: '5%'
  },
  titleInfoPhone: {
    width: '100%',
    padding: '10px 0',
    fontSize: '130%',
    backgroundColor: 'rgb(86,153,198)'
  },
  borderline: {
    borderLeft: "1px solid rgba(128,128,128,0.5)",
    borderRight: "1px solid rgba(128,128,128,0.5)"
  },
  addToCart: {
    textDecoration: "none"
  }

});

export default styles;
