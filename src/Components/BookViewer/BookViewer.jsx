import React from 'react';
import Books from '../Books/Books';
const BookViewer = (props) => {
  return (
    <div className="row row-spacer">
        <div className="col-md-4">
            {/*Button here to move to previous book viewed*/}
            <button onClick={props.previousBook}>Previous Book</button>
        </div>
        <div className="col-md-4">
            {/*Display book with cover here*/}
            <Books book={props.book}/>
        </div>
        <div className="col-md-4">
            {/*Button here to move to next book viewed*/}
            <button onClick={props.nextBook}>Next Book</button>
        </div>
    </div>
  );
}

export default BookViewer;
