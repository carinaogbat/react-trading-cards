'use strict';

function Homepage() {
  return (<React.Fragment>
    <p>This is a website where you can view your trading cards!</p>
    <a href="/cards">You can view your cards here.</a>
    <img src="/static/img/balloonicorn.jpg"></img>
    </React.Fragment>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
