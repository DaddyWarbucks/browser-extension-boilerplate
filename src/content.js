import './lib/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';

const Content = () => {
  const handleClick = (event) => console.log(event);
  return (
    <div
      className="bg-light"
      style={{ width: 300, position: 'absolute', bottom: 0, right: 0 }}
    >
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
const shadow = root.attachShadow({ mode: 'open' });

const appContainer = document.createElement('div');

const style = document.createElement('link');
style.setAttribute('rel', 'stylesheet');
style.setAttribute('type', 'text/css');
style.setAttribute(
  'href',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
);

shadow.appendChild(style);
shadow.appendChild(appContainer);

document.body.appendChild(appContainer);

ReactDOM.render(<Content />, root);
