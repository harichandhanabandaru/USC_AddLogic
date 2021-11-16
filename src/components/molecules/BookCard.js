import React from 'react'
import TimeIcon from '../atoms/Icons/TimeIcon'
import Card from "@material-ui/core/card";
import CardContent from "@material-ui/core/card";
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography";

function BookCard(book) {
    return (
      <div>
        <Card>
          <CardMedia
            image={book.img}
          />
          <CardContent>
            <Typography> {book.name}</Typography>
            <Typography> {book.author}</Typography>
            <Typography>
            {/* time icon */}
               {book.time} -minutes read
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
}

export default BookCard
