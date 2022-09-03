const { promiseFetchData } = require('../base/promise');

test('test promise', () => {
    return promiseFetchData().then((data)=>{
        expect(data).toBe('fight')
    });
});  
