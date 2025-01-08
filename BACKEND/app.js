const { createServer } = require('node:http');
const { MongoClient } = require('mongodb');

// SETUP VARS
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000; // Default to port 3000 if not set
const uri = process.env.MONGO_URI;

if (!uri) {
  console.error('Error: MONGO_URI environment variable is not set.');
  process.exit(1);
}

// CONNECT TO MONGODB
const client = new MongoClient(uri);

async function listUsers() {
  try {
    const db = client.db('flashset'); // Database name
    const collection = db.collection('users'); // Collection name
    const users = await collection.find({}).toArray(); // Fetch all documents
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

const server = createServer(async (req, res) => {
  if (req.url === '/users' && req.method === 'GET') {
    try {
      const users = await listUsers();
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ users }));
    } catch (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Error retrieving users.' }));
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

(async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
})();
