import React, { PureComponent } from 'react';
import Header from '../components/Header';
import MoviesList from '../components/Movies/MoviesList';
import movies from '../lib/movies.json';

// export default class Home extends PureComponent {
//   render() {
//     const { movies } = this.props;
//     return (
//       <>
//         <Header title="La Cartelera" miArray={['hola', 'chao']} />
//         <MoviesList movies={movies} />
//       </>
//     );
//   }
// }

const Home = () => (
  <>
    <Header title="La Cartelera" />
    <MoviesList movies={movies} />
  </>
);

export default Home;
