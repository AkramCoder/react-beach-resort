import React from 'react';

const Heros = ({hero,children}) => {
    return <header className={hero}>{children}</header>;
}

Heros.defaultProps = {
  hero: "defaultHero",
};
export default Heros;