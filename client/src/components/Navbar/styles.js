import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 10px',
    background: '#081C15',
     height:"50px"
  },
  heading: {
    color: '#74C69D',
    textDecoration: 'none',
    fontSize : "25px",
    fontWeight : "bold",
    fontFamily: "Lato"
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down("xs")] :{
    heading:{
      fontSize:"25px"
    },
    icon:{
      display: 'flex',
      flexDirection:"row",
      alignItems:"right"
    }
  }
  
}));
