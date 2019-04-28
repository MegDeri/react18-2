var element = 
    React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmow'),
      React.createElement('ul', {},
        React.createElement('li', {},
          React.createElement('h2', {}, 'Harry Potter'),
          React.createElement('p', {}, 'Film o czarodzieju'),
        ),
        React.createElement('li', {},
          React.createElement('h2', {}, 'Krol lew'),
          React.createElement('p', {}, 'Film o malym lwie'),
        )
      )
    );
    
ReactDOM.render(element, document.getElementById('app'));
    