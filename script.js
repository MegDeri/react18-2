var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      img: 'http://via.placeholder.com/400x200'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      img: 'http://via.placeholder.com/400x200'
    },
    {
      id: 3,
      title: 'W pogoni za szczesciem',
      desc: 'Co jest wazne w zyciu..pieniadze?',
      img: 'http://via.placeholder.com/400x200'
    },
    {
      id: 4,
      title: 'Me before you',
      desc: 'Eutanazja..., czy kalectwo to dobry powod by sie decydowac na ten krok?',
      img: 'http://via.placeholder.com/400x200'
    }
  ];

  var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img})
      );
  });

  var element = 
    React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmow'),
      React.createElement('ul', {}, moviesElements)
    );

  ReactDOM.render(element, document.getElementById('app'));
