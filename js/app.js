import {
    openDB
} from '../../node_modules/idb/build/esm/index.js';
import checkConnectivity from './connection.js';

(async function (document) {
    // Initialize indexDb with empty data
    checkConnectivity();
    var data = [{
        "status": "",
        "libelle": ""
    }];
    const database = await openDB('app-store', 1, {
        upgrade(db) {
            db.createObjectStore('list');
        }
    });
    await database.put('list', data, 'list');
})(document);
