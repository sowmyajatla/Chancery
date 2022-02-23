import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor:"#74C69D"
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius : 25,
    marginRight:"10px"
   
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    justifyContent :'center',
    alignItems: 'center'
  },
  buttonSubmit: {
    marginBottom: 10,
    width : '40%',
    backgroundColor:"#1B4332",
    color:"white"
    
  },
  buttonClear:{
    marginBottom: 10,
    width : '40%',
    margin: '0 10px',
    backgroundColor:"#1B4332",
    color:"white"
    
  },
  typography :{
   fontWeight: "700",
   fontFamily: "Philosopher"
  }
}));