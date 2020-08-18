import React from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

const OptionsPage = () => {
  const handleClick = event => console.log(event);
  return (
    <div style={{ width: 300 }}>
      <ListGroup>
        <ListGroupItem tag="button" action onClick={handleClick}>
          <p className="mb-1 font-weight-bold lead">Do a thing</p>
          <p className="mb-0">
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </p>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<OptionsPage />, root);
