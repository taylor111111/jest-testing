import { asyncFetchData, asyncErrorFetchData } from '../base/async'

test('test ajax', async () => {
    const data = await asyncFetchData();
    expect(data).toBe('fight');
}); 

test('test ajax error', async () => {
    expect.assertions(1);
    try {
        const data = await asyncErrorFetchData();
      } catch (e) {
        expect(e).toMatch('error');
    }
});
