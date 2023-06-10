const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const client = new MongoClient(
    'mongodb+srv://kakdela24101610:QP2NvPOWIEhvRIm1@cluster0.koxgrpd.mongodb.net/?retryWrites=true&w=majority'
);

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());

const start = async () => {
    try {
        await client.connect();
        console.log('Connection done');
        await client.db().createCollection("ideasList")
    } catch (e) {
        console.log('sas');
        console.log(e);
    }
};

app.get('/getIdeasList', async (req, res) => {
    try {
        console.log('START SUCCESFULl');
        await client.connect();
        const ideasCollection = client.db().collection('ideasList');

        const ideas = await ideasCollection.find({}).toArray();
        res.status(201).json([...ideas]);
    } catch (e) {
        console.error(e);
        return res.sendStatus(404);
    }
});

app.get('/getCompletedIdeas', async (req, res) => {
    try {
        console.log('START SUCCESFULl');
        await client.connect();
        const ideasCollection = client.db().collection('completedIdeas');

        const ideas = await ideasCollection.find({}).toArray();
        res.status(201).json([...ideas]);
    } catch (e) {
        console.error(e);
        return res.sendStatus(404);
    }
});

app.post('/postIdeasList', async (req, res) => {
    try {
        await client.connect();
        const ideasCollection = client.db().collection('ideasList');

        await ideasCollection.deleteMany({});

        const dataList = req.body

        console.log('!!!!!!!!*********&&&&&&&&', dataList);

        await ideasCollection.insertMany(dataList, (err, result) => {
            if (err) {
                console.error('Ошибка при выполнении insertMany:', err);
                return;
            }
            console.log('Документы успешно добавлені:', result.insertedCount);
        });
        res.status(200).send('Data upload');
    } catch (e) {
        console.error(e);
        return res.sendStatus(404);
    }
});

app.post('/postCompletedIdeas', async (req, res) => {
    try {
        await client.connect();
        const ideasCollection = client.db().collection('completedIdeas');

        await ideasCollection.deleteMany({});

        const dataList = req.body

        console.log('!!!!!!!!*********&&&&&&&&', dataList);

        await ideasCollection.insertMany(dataList, (err, result) => {
            if (err) {
                console.error('Ошибка при выполнении insertMany:', err);
                return;
            }
            console.log('Документы успешно добавлені:', result.insertedCount);
        });
        res.status(200).send('Data upload');
    } catch (e) {
        console.error(e);
        return res.sendStatus(404);
    }
});

app.listen(PORT, () => {
    console.log(`Server starting on PORT ${PORT}`);
});
