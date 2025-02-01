import express from 'express';
import { Add,Delete,View,Update,ViewDeatil } from '../Controllers/cric.controllers.js';

const router = express.Router();

router.get('/',View)

router.get('/:id',ViewDeatil)

router.post('/',Add)

router.put('/:id',Update)

router.delete('/:id',Delete)

export default router;