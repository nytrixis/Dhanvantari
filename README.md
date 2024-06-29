# Dhanvantari

Dhanvantari is a decentralized healthcare application built on the Ethereum blockchain and IPFS (InterPlanetary File System). It aims to provide a secure and transparent platform for managing patient records, facilitating emergency services, and enabling secure data sharing among healthcare providers.

## Features

- **Patient Record Management**: Create, update, and securely store patient records on the blockchain and IPFS.
- **Emergency SOS Requests**: Patients can initiate emergency SOS requests, which are recorded on the blockchain for transparency and accountability.
- **Secure File Sharing**: Healthcare providers can securely share patient records and medical files using IPFS, ensuring data privacy and integrity.
- **Decentralized Storage**: Patient records and medical files are stored on IPFS, ensuring data redundancy and resilience against single points of failure.
- **Blockchain Transparency**: All transactions and data updates are recorded on the Ethereum blockchain, providing an immutable and auditable trail.

## Technologies Used

- **Avalanche**: The decentralized blockchain platform used for recording transactions and smart contract deployment.
- **IPFS**: The InterPlanetary File System, a peer-to-peer distributed file system used for storing and sharing patient records and medical files.
- **React**: The JavaScript library used for building the user interface of the web application.
- **Node.js**: The JavaScript runtime environment used for the backend server and blockchain interaction.
- **MongoDB**: The NoSQL database used for storing and retrieving patient records and SOS requests.

## Getting Started

To run the Dhanvantari application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/savarniknandinee/Dhanvantari.git
    ```

2. Install dependencies for the frontend, backend and recods:
    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    cd ../records
    npm install
    ```

3. Start the frontend, backend and records servers:
    ```bash
    cd frontend
    npm dev run
    cd ../backend
    npm dev run
    cd ../records
    npm run start
    ```

4. Access the application at [http://localhost:5173]

## Contributing

Contributions to Dhanvantari are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

Dhanvantari is licensed under the MIT License.

## Acknowledgments

- Avalanche
- IPFS
- React
- Node.js
- MongoDB
