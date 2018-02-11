import express from 'express';
const router = express.Router();
const login = router.get('/login',function(request,response){
	response.send({
		status:200
	});
});

module.exports = login;