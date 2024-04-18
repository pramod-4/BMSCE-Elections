const express=require('express')
const router=express.Router();
const {getAllVoters,addVoter,getVoter,updateVoter,deleteVoter}=require('../conrollers/voters')


router.route('/').get(getAllVoters).post(addVoter);
router.route('/:usn').get(getVoter).patch(updateVoter).delete(deleteVoter)


module.exports=router