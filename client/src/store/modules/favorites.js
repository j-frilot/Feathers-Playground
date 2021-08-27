import axios from 'axios';

const state = {
    favorites: []
};

const getters = {
    allFavorites: (state) => state.favorites
};

const actions = {
    async fetchFavorites({ commit }) {
        const res = await axios.get('http://localhost:3030/favorites');

        commit('setFavorites', res.data);
    },
    async deleteFavorite({ commit }, id) {
        console.log('Delete Button: ', id);
        await axios.delete(`http://localhost:3030/favorites/${id}`);

        commit('removeFavorite', id);
    },
    async addFavorite({ commit }, artist) {
        const res = await axios.post(`http://localhost:3030/favorites`, {
            artist
        });

        commit('newFavorite', res.data);
    }
};

const mutations = {
    setFavorites: (state, favorites) => (state.favorites = favorites),

    removeFavorite: (state, id) =>
        (state.favorites = state.favorites.filter(
            (favorite) => favorite.id !== id
        )),

    newFavorite: (state, favorite) => state.favorites.push(favorite)
};

export default {
    state,
    getters,
    actions,
    mutations
};
