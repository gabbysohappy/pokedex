import React, { Component } from 'react';
import { PokemonConsumer } from '../../providers/PokemonProvider'
import List from './List';
import PokeForm from './PokeForm';

class Pokedex extends Component {
  state = { pokemons: this.props.pokemons, adding: false }
  toggleAdd = () => this.setState({ adding: !this.state.adding })
  render() {
    const { adding } = this.state
    return(
      <>
        <h1>Pokedex</h1>
        {
          adding ?
          <PokeForm toggleAdd={this.toggleAdd} />
          :
          <button onClick={this.toggleAdd}>Add Pokemon</button>
        }
        <List pokemons={this.state.pokemons} />
      </>
    )
  }
}
const ConnectedPokedex = () => {
  return(
    <PokemonConsumer>
      { value =>(
        <Pokedex
          pokemons={value.pokemons}
        />
      )}
    </PokemonConsumer>
  )
}
export default ConnectedPokedex;
