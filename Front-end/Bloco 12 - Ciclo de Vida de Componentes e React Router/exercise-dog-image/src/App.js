import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.fetchDog = this.fetchDog.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      image: '',
      loading: true,
      arrayImages: '',
    };
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.image.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('dog', prevState.arrayImages);
  }

  handleClick() {
    const { image } = this.state;
    this.setState((prevState) => ({
      arrayImages: [...prevState.arrayImages, image],
      loading: true,
    }), () => this.fetchDog());
    alert(image);
  }

  async fetchDog() {
    const request = await fetch('https://dog.ceo/api/breeds/image/random');
    const object = await request.json();
    this.setState(({
      loading: true,
    }), () => (
      this.setState({
        image: object.message,
        loading: false,
      })
    ));
  }

  render() {
    const { image, loading } = this.state;
    return (
      <div>
        {
          loading ? <p>...Loading</p> : <img src={ image } alt="dogs" />
        }
        <button type="button" onClick={ this.handleClick }>Clique</button>
      </div>
    );
  }
}

export default App;
