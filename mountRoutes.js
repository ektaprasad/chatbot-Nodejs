const chatRoutes = require('./routes/chat');

module.exports = (app) => {
    app.use('/' ,chatRoutes);
}