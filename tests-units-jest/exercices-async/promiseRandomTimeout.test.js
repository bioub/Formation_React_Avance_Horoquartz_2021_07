const promiseRandomTimeout = require("./promiseRandomTimeout");

test('promiseRandomTimeout function with done', (done) => {
    promiseRandomTimeout('abc')
        .then((val) => {
            expect(val).toBe('abc');
            done();
        });
});

test('promiseRandomTimeout function with done', async () => {
    const val = await promiseRandomTimeout('abc');
    expect(val).toBe('abc');
});

// Zone.js / async hooks
// intercepter des callbacks asynchrone

test('promiseRandomTimeout function with useFakeTimers', async () => {
    jest.useFakeTimers();
    const promise = promiseRandomTimeout('abc');

    // jest.runAllTimers(); // execute tous les timers
    jest.advanceTimersByTime(10000); // execute les timers <= 10000ms

    const val = await promise;
    expect(val).toBe('abc');
    jest.useRealTimers();
});