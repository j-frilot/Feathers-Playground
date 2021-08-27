// src/store/services/favorites.js
import find from 'feathers-vuex/dist/useFind';
import feathersClient, {
    makeServicePlugin,
    BaseModel
} from '../../feathers-client';

class Favorites extends BaseModel {
    constructor(data, options) {
        super(data, options);

        find: {
            return this.favorites;
        }

        create: {
            const favorites = {
                id: this.favorite,
                artist: this.artist
            };
        }
    }
    // Required for $FeathersVuex plugin to work after production transpile.
    static modelName = 'Favorites';
    // Define default properties here
    static instanceDefaults() {
        return {
            id: '',
            artist: ''
        };
    }
}
const servicePath = 'favorites';
const servicePlugin = makeServicePlugin({
    Model: Favorites,
    service: feathersClient.service(servicePath),
    servicePath
});

// Setup the client-side Feathers hooks.
feathersClient.service(servicePath).hooks({
    before: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
});

export default servicePlugin;
