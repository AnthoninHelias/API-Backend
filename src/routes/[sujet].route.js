const router = require('express').Router();

const {
    getSubjects,
    getSubjectById,
    getSubjectsByName,
    createSubject,
    updateSubject,
    deleteSubject
} = require('../controllers/[sujet].controller');

router.get('/', getSubjects);
router.get('/:id', getSubjectById);
router.get('/filter/:name', getSubjectsByName);
router.post('/', createSubject);
router.put('/:id', updateSubject);
router.delete('/:id', deleteSubject);

