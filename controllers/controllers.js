const hello = (req,res,next) => {
	res.status(200).json({
		body: "Hello"
	});

};
//When called this controller, will respond to the client (frontend) with a status code of 200 (indicating a success)
//and a json object with a string "Hello"

module.exports.hello = hello;