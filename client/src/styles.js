import { makeStyles } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
  headerTitles:{
   display:"flex",
   flexDirection:"column",
   alignItems:"center",
  },
  heading: {
    color: '#74C69D',
    display:"flex",
    alignItems:"center",
    top:"20%",
    position:'absolute',
    fontFamily:"Cinzel",
    fontSize:"55px"
  },
  para:{
    color:"white",
    display:"flex",
    alignItems:"center",
    alignContent:"center",
    top:"40%",
    lineHeight: "1.6",
    fontWeight:"700",
    position:'absolute',
    width:"48%",
    fontSize:"20px",justifyContent:"center",
    fontFamily: 'Fauna One'
  },
  formHeading:{
   marginLeft:"980px",
   fontSize:"15px",justifyContent:"center",
    fontFamily: 'Fauna One',
    color:"black"
  },
  image: {
    height:"600px",
    width:"100%",
    margin :'0 0 30px 0'
  },
  [theme.breakpoints.down("sm")] :{
    mainContainer :{
      flexDirection: "column-reverse"
    }
  }
  
}));