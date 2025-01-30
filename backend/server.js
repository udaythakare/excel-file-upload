const express = require('express');
const app = express();
const port = 3001;
const fileController = require('./controller/fileController')

app.use('/api', fileController)

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
