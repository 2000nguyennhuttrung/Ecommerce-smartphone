const styles = () => ({
  root: {
    backgroundImage: 'url("https://th.bing.com/th/id/R.2a761787715ca71788aad1a28ab057ac?rik=yREJ2nAK9Ib9yg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f09%2fAll-White-Background-for-Desktop.jpg&ehk=faNX%2bOZ5%2bUeETjecR18frqYPLdGhJSkGcgcDgj4j%2fVk%3d&risl=&pid=ImgRaw&r=0")',

    position: 'relative',
    height: "80vh",
  },
  title: {
    fontFamily: "Roboto",
    marginBottom: "15px"
  },
  leftSide: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "100%",

  },
  btnNextPage: {
    marginTop: "15px",
    backgroundColor: "rgb(131,172,236)",
    color: "white",
    borderRadius: "25px",
    width: "200px",
    padding: "10px"
  },

  content: {
    width: "50%",
    marginLeft: "10%"
  },
  rightSide: {
    float: "right",
  },
  img: {
    position: "absolute",
    left: "70%",
    top: "50%",
    transform: "translate(-10%,-50%)",
    width: "300px",
  }
});

export default styles;

