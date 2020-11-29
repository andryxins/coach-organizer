const { Router } = require('express');
const router = Router();

// const { postNewIrregularClass } = require('../Controllers/irregularClasses');
const {
  getAllRegularClasses,
  getAllRegularClassesByDay,
  postNewRegularClass,
} = require('../Controllers/regularClasses');

router.get(
  '/all-regular-classes',
  getAllRegularClasses,
  getAllRegularClassesByDay
);

router.post('/regular-class', postNewRegularClass);

// router.post('new-irregular-class', postNewIrregularClass);

module.exports = router;
