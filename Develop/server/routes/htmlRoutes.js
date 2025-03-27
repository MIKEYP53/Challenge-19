const path = require('path');

module.exports = (app) => {
  // Add a catch-all route
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
};