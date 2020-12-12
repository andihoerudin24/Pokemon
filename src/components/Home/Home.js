import React from 'react';
import './Home.css';
import heroImg from '../../assets/hero-img.jpg';
import pokemonAvatar from '../../assets/pokemon-avatar.svg';
import { Link } from 'react-router-dom';
import { routes } from '../../helpers/routes';
import pokemonPlaceholder from '../../assets/tokopedia.svg';

const Home = () => {
  return (
    <section
      className='homepage'
      style={{backgroundImage: `url(${heroImg})`}}
    >
      <div className='homepage__content'>
        <h2>Selamat Datang</h2>
        <img
          src={pokemonPlaceholder}
          alt='pokemon avatar'
          className='pokemon-avatar'
        />
        <Link
          to={routes.pokemon}
          className='find-pokemon__btn'
        >
          Cari Pokemon Kesukaan Agan Ya
        </Link>
      </div>
    </section>
  )
}

export default Home;