const express=require('express')
const router=express.Router();
const {getAllCandis,addCandi,getCandi,updateCandi,deleteCandi,getCandibyPos}=require('../conrollers/candidates')



router.route('/').get(getAllCandis).post(addCandi);
router.route('/:cid').get(getCandi).patch(updateCandi).delete(deleteCandi)
router.route('/position/:pos').get(getCandibyPos)


module.exports=router