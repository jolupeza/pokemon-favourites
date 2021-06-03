import axios from "axios";

export default {
  async getPokemons() {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data);
      }

      throw new Error("Invalid action!");
    }
  },
  async getInfoPokemon(name) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data);
      }

      throw new Error("Invalid action!");
    }
  },
};
