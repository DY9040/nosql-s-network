const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction, 
    deleteReaction
} = require('../../controllers/thought-controllers');

router
    .route('/')
    .get(getAllThoughts);

    router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

    router
    .route('/:userId')
    .post(createThought);

    router
    .route('/reactions/:thoughtId')
    .post(addReaction);

    router
    .route('/:thoughtId/:reactionId')
    .delete(deleteReaction);

    module.exports = router;
