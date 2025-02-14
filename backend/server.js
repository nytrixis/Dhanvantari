
import { create } from 'ipfs-http-client';
import Express from 'express';
import cors from 'cors';
import fs from 'fs';
import bodyParser from 'body-parser';
import SOSRequest from 'file:///C:/Users/ajaya/Downloads/DHANVANTARI/DHANVANTARI/records/models/sosRequest.js';
import User from 'file:///C:/Users/ajaya/Downloads/DHANVANTARI/DHANVANTARI/records/models/userModel.js';




//pinata gateway added 

//gateway - https://brown-imaginative-eagle-107.mypinata.cloud
import axios from 'axios';
import FormData from 'form-data';
const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiZWNkMzcwNS1kMjdjLTQ4Y2UtODBkZS1iY2NkNmFkNTI5YTIiLCJlbWFpbCI6ImFqYXlhcGFuZGV5MjQwNEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZDdjMmMyZTk4MWJmOTI4NjA1YTkiLCJzY29wZWRLZXlTZWNyZXQiOiJjMTA2MmRkNTk5MzFjODNkNjVjMDM1YzVkYWNjMTlmMmM1ZDdjMWFmNGZjYTAzODJiODMwM2IzMWE2ZTQxYWNlIiwiaWF0IjoxNzE5Njg4MjA3fQ.zWclwuKyI6VZ1gt6urcSyF92RYQsCM6pywkJna4JtLM";

const PORT = 3000;
const app = Express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const corsOptions = {
    origin: "*",
};

app.use(Express.json());
app.use(cors(corsOptions));

const ipfsClient = create({
    host: "localhost",
    port: 5001,
    protocol: 'http',
});


const addFileToIPFS = async (file) => {

    fs.writeFileSync('./fetched_image.jpg', file);
    console.log('Image file fetched from IPFS and saved as fetched_image.jpg');

    const formData = new FormData();
    const src = "./fetched_image.jpg";
    
    const f = fs.createReadStream(src)
    formData.append('file', f)
    
    const pinataMetadata = JSON.stringify({
      name: 'File name',
    });
    formData.append('pinataMetadata', pinataMetadata);
    
    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', pinataOptions);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          'Authorization': `Bearer ${JWT}`
        }
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
}

const getFile = async (hash) => {
    try {
        const chunks = [];
        for await (const chunk of ipfsClient.cat(hash)) {
            chunks.push(chunk);
        }
        return Buffer.concat(chunks);
    } catch (error) {
        console.error('Error fetching file from IPFS:', error);
        throw error;
    }
};

app.get('/', async(req, res)=>{
    res.send("main page");
})

app.get('/img/:cid', async (req, res) => {
    try {
        const exampleCID = req.params.cid;
        console.log(exampleCID);

        try {
            const data = await getFile(exampleCID);
            console.log(data);
            const fileSignature = data.toString('hex', 0, 4);
            let filePath = '';

            if (fileSignature === '89504e47') {
                filePath = '../client/src/assets/img_file.png';
            } else if (fileSignature === 'ffd8ffe0' || fileSignature === 'ffd8ffe1') {
                filePath = '../client/src/assets/img_file.jpg';
            } else if (fileSignature === 'ffd8ffe0' || fileSignature === 'ffd8ffe1') {
                filePath = '../client/src/assets/img_file.jpeg';
            } else {
                console.log('File type: Unknown');
                res.status(400).json("File type is unknown.");
                return;
            }

            fs.writeFileSync(filePath, data);
            res.status(200).json("File added successfully.");
        } catch (error) {
            console.error(error);
            res.status(400).json("Failed to fetch and save the file.");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server error.");
    }
});


app.post('/share', async (req, res) => {
    try {
        console.log("/share");
        const base64Data = req.body.fileData;
        const matches = base64Data.match(/^data:(.+);base64,(.+)$/);
        if (!matches || matches.length !== 3) {
            throw new Error('Invalid base64 data format.');
        }
        const [, mimeType, base64EncodedData] = matches;
        const fileExtension = mimeType.split('/')[1];
        const fileName = `output.${fileExtension}`;

        const imageData = Buffer.from(base64Data.split(',')[1], 'base64');
        fs.writeFileSync(fileName, imageData);

        const result = await addFileToIPFS(imageData);
        console.log(result);
        return res.json(result);
        
    } catch (error) {
        console.error('Error processing request:', error);
    }
});

app.post('/sosreq', async (req, res) => {
  try {
    const { contactNumber, location, reason, healthProblem, estimatedTime } = req.body;
    const newSOSRequest = new SOSRequest({
      contactNumber,
      location,
      reason,
      healthProblem,
      estimatedTime,
      status: 'pending',
    });
    const savedSOSRequest = await newSOSRequest.save();
    res.status(201).json(savedSOSRequest);
  } catch (error) {
    console.error('Error creating SOS request:', error);
    res.status(400).json({ error: 'Failed to create SOS request.' });
  }
});


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});



app.post('/signup', async (req, res) => {
  try {
    const { name, username, age, gender, bloodGroup, allergies, contact, email, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Create a new user document
    const newUser = new User({
      name,
      username,
      age,
      gender,
      bloodGroup,
      allergies,
      contact,
      email,
      password,
    });

    // Save the new user to the database
    await newUser.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

app.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Find the user by username
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ error: 'Invalid username or password' });
      }
  
      // Check if the password matches
      if (user.password !== password) {
        return res.status(400).json({ error: 'Invalid username or password' });
      }
  
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Failed to log in' });
    }
  });
