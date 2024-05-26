const express = require('express');
const Web3 = require('web3');
const fs = require('fs');
require('dotenv').config();

const app = express();
app.use(express.json());

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL));
const contractAddress = process.env.CONTRACT_ADDRESS;
const privateKey = process.env.PRIVATE_KEY;
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

const abi = JSON.parse(fs.readFileSync('CharityTrackerABI.json', 'utf-8'));
const contract = new web3.eth.Contract(abi, contractAddress);

app.post('/donate', async (req, res) => {
    const { amount } = req.body;

    const tx = {
        from: account.address,
        to: contractAddress,
        value: web3.utils.toWei(amount, 'ether'),
        gas: 2000000,
        data: contract.methods.donate().encodeABI()
    };

    const signedTx = await account.signTransaction(tx);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    res.json(receipt);
});

app.get('/donations/:donor', async (req, res) => {
    const { donor } = req.params;
    const donations = await contract.methods.getDonations(donor).call();
    res.json(donations);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});