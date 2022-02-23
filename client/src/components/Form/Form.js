import React, { useState,useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";

import {useDispatch } from "react-redux";
import {useSelector} from "react-redux";

import useStyles from "./styles";
import {createPost ,updatePost} from "../../actions/posts";

const Form = ({currentId,setCurrentId}) => {
    const [postData, setPostData] = useState({ creator: '', companyName: '', message: '', tags: '', selectedFile: '' });
    const classes = useStyles();

    const dispatch =useDispatch();
    const post= useSelector((state) => currentId ? state.posts.find((p) =>p._id === currentId) : null);

    useEffect(() =>{
      if(post) setPostData(post);    
    },[post]);

    const handleSubmit = (e) => {
       e.preventDefault();
       if(currentId){
        dispatch(updatePost(currentId,postData));
       }
       else{
       dispatch(createPost(postData));
       }
       clear();
    }

    const clear =() =>{
       setCurrentId(null);
       setPostData({ creator: '', companyName: '', message: '', tags: '', selectedFile: '' }); 
    }
    return (
        
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography  className={classes.typography} variant="h6" align="center" gutterBottom >{currentId ? "Update" : "Your"} Interview Experience</Typography>
                <TextField name="cretaor" variant="outlined" label="Creator" fullWidth  size="small" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="CompanyName" variant="outlined" label="CompanyName" required fullWidth size="small" value={postData.companyName} onChange={(e) => setPostData({ ...postData, companyName: e.target.value })} />
                <TextField name="Your Experience"  id="outlined-multiline-static"  multiline rows={4} required variant="outlined" label="Your Experience" size="small" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth size="small"  value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })} />
                <div className={classes.fileInput}>
                
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                   
                </div>
                <Button variant="contained" className={classes.buttonSubmit} size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained"  className={classes.buttonClear} size="small" fullWidth onClick={clear}>Clear</Button>
            </form>
            
        
        

    );
}

export default Form;