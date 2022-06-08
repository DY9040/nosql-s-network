const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).send({ '<h1>404 Not Found</h1>': 'The page you are looking for does not exist.' );
});

module.exports = router;