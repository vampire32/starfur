const express = require('express')
const app = express()
const port = 5000

app.use(express.static('public'))

app.post("/post", (req, res) => {
	 var btn = document.getElementById("sending");
		var namee = document.getElementById("Name").value;
		var email = document.getElementById("Email").value;
		var phone = document.getElementById("Phone").value;
		var message = document.getElementById("Message").value;
		var body =
			"name:" +
			namee +
			"<br/> email" +
			email +
			"<br/> phone" +
			phone +
			"<br/> message" +
			message;

		btn.addEventListener("click", function (e) {
			e.preventDefault();
			Email.send({
				Host: "smtp.gmail.com",
				Username: "moizabdul320@gmail.com",
				Password: "Rubabmoiz@1022!",
				To: "ameerbasit95@gmail.com",
				From: email,
				Subject: "New Message from Furniture site",
				Body: body,
			}).then((message) => alert(message));
		});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})