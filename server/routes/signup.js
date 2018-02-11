import express from 'express';
const router = express.Router();
const signup = router.get('/test',function(request,response){
	response.send({
		status:200
	});
});

module.exports = signup;