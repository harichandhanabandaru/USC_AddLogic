import React from 'react'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import {ListItem,ListItemText} from '@material-ui/core/ListItem'

function WishBookList(book) {

    const handleUpCount =(bookitem)=>{
        bookitem.upVoteCount=bookitem.upVoteCount+1

    }
    
    const showBook=()=>{
        //show selected book
    }

    return (
        <div>
           { 
           book.map((bookitem) => {
                return (<div>
                    <Grid container>
                        <Grid item onClick={handleUpCount(bookitem)}>{bookitem.upVoteCount}</Grid>
                        <Grid item src={book.imgsrc} alt="book image"/></Grid>
                        <Grid item>
                            <List>
                            <ListItem onClick={showBook}>
                                <ListItemText>{bookitem.title}</ListItemText>
                            </ListItem>
                            </List>
                            <List>
                                <ListItem onClick={showBook}>
                                        <ListItemText>{bookitem.author}</ListItemText>
                                 </ListItem>
                            </List>
                        </Grid>
                
                </div>)     
            })
            }
        </div>
    )
}

export default WishBookList
