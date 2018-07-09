import db from './../models/index';

export const list = function(limit = 10) {
    const book = db.book;
    const promise = book.findAll({ limit: limit });
    return promise;
}

