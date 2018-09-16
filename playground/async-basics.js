console.log('Starting app');
setTimeout( () => console.log('Inside timeout'), 2000);
setTimeout(() => {
    console.log('Inside second timeout');
}, 0);
console.log('Finishing app');
