const router = require('express').Router();
const userRoutes = require('./user-routes');
const { ApolloServer } = require('apollo-server-express');

router.use('/users', userRoutes);

module.exports = router;
