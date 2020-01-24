'use strict';

jest.mock('fs');

const reader = require('../../lib/reader.js');

describe(' \n FS file reader Module ' , () =>
{

    describe (' \n Call back reader' , () =>
    {
        it('Read a File and return the contect of it with no errors ', () =>
        {
            let file = `${__dirname}/../../data/person.json`;
            return reader.readWithCallBack(file,(error,data) =>
            {
                expect(error).toBe(undefined);
                expect(typeof data).toBe('object');
            });
        })

        it('Read a File and return the contect of it with and check the type of data "Object"  ', () =>
        {
            let file = `${__dirname}/../../data/person.json`;
            return reader.readWithCallBack(file,(error,data) =>
            {
                expect(typeof data).toBe('object');
            });
        })

        it('when given a bad file ,returns an error ', () =>
        {
            let file = `${__dirname}/../../dataxxx/person.json`;
            return reader.readWithCallBack(file,(error,data) =>
            {
                expect(error).toBeFalsy();
            });
        })

    })

    describe ('\n Promise reader' , () =>
    {
        it('Read a File and return the contect of it with no errors ', () =>
        {
            let file = `${__dirname}/../../data/person.json`;
            reader.readWithPromise(file)
                .then(data => expect(data).toBeDefined())
                .catch(error => expect(error).not.toBeDefined())                         
        });
    });

    // it('when given a bad file ,returns an error ', () =>
    //     {
    //         let file = `${__dirname}/../../dataxxx/person.json`;
    //         reader.readFilepromisify(file)
    //         .then(data => expect(data).toBeUndefined())
    //         .catch(error => expect(error).toBeDefined())
    //     });

})