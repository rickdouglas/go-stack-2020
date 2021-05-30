const express = require('express');

const app =  express();

app.get('/', (request, response) => {
    return response.json({message:'Hello from the other side'})
})

app.listen(3333, () => {
    console.log('backend started');
});