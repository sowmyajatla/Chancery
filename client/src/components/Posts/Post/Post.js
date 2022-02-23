import React from "react";
import useStyles from "./styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import moment from "moment";
import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card} sx={{ maxWidth: 345 }}>
            <CardMedia className={classes.media} image={post.selectedFile} companyName={post.companyName} />
            <div className={classes.overlay} >
                <Typography className={classes.typography} variant="h6">{post.creator}</Typography>
                <Typography className={classes.typography} variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: "white" }} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                    Edit
                </Button>
            </div>

            <CardContent>
                <Typography className={classes.typography} variant="h5" gutterBottom styles={{ fontWeight: 'bold' }}>{post.companyName}</Typography>
            </CardContent>
            <CardContent>
                <Typography className={classes.typography} variant="" color="textSecondary" component="p" >{post.message}</Typography>
            </CardContent>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardActions className={classes.cardActions}>
                <Button size="small"  onClick={() => { dispatch(likePost(post._id)) }}>

                    <ThumbUpAltIcon fontSize="small" />
                    {post.likeCount}

                </Button>
                <Button size="small"  onClick={() => { dispatch(deletePost(post._id)) }}>
                    <DeleteIcon fontSize="small" />

                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;