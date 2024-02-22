import { Router } from 'express';

import {
    getAllCords,
    getCordsById,
    createCord,
    updateCord,
    deleteCord,
} from '../controllers/cord.controller';

const CordRouter = Router();

CordRouter.get('/', getAllCords);
CordRouter.get('/:id', getCordsById);
CordRouter.post('/', createCord);
CordRouter.put('/:id', updateCord);
CordRouter.delete('/:id', deleteCord);
CordRouter.delete('/:id', deleteCord);

export default CordRouter;