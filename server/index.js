// To connect mongoDB database
const mongoose = require('mongoose');
mongoose.connect(
	'mongodb://localhost:27017/',
	{
		dbName: 'schema-database',
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) =>
		err ? console.log(err) : console.log('Connected to schema-database')
);

// Schema for users of app
const UserSchema = new mongoose.Schema({
	_id: {
		type: String,
		required: true,
		unique: true,
	},
	schemes: [
		{
			title: {
				type: String,
				required: true,
				unique: true,
			},
			elements: {
				type: Array,
				required: true,
			},
		},
	],
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});

app.use(express.json());
app.use(cors());
app.get('/', (req, resp) => {
	resp.send('App is Working');
	// You can check backend is working or not by
	// entering http://loacalhost:5000

	// If you see App is working means
	// backend working properly
});

app.post('/schemes/validate', async (req, resp) => {
	try {
		let isFindScheme = await User.findById(req.body.userData).where('title').equals(req.body.schemeName);
		// let isFindScheme = как-то найти схему у юзера
		if (isFindScheme) {
			resp.send(true);
			console.log(isFindScheme);
		} else {
			resp.send(false);
		}
	} catch (e) {
		resp.send('Something Went Wrong');
	}
});
app.post('/schemes/save', async (req, resp) => {
	try {
		let findUser = await User.findById(req.body.userData);

		if (findUser) {
			let schemesElement = {
				title: req.body.schemeName,
				elements: req.body.elementsOnGrid,
			};
			UserSchema.update(
				{ _id: findUser },
				{ $push: { schemes: schemesElement } }
			);

			console.log('User already register');
		} else {
			const user = new User(req.body);
			await user.save();
		}
	} catch (e) {
		resp.send('Something Went Wrong');
	}
});
app.listen(3001);
