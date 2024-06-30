pragma solidity ^0.8.9;

contract VoteMain {
    address public owner;
    address mailbox = 0xfFAEF09B3cd11D9b20d1a19bECca54EEC2884766;

    constructor(address _mailbox) payable {
        mailbox = _mailbox;
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    struct sharedWith {
        string cid;
        address receiver;
        bytes32 timestamp;
    }
    mapping(address => sharedWith[]) dataHolder;
    event addedFileToIPFS(address _sender, address _receiver, string _cid);

    modifier onlyMailbox() {
        require(msg.sender == mailbox, "Mailbox can call this function");
        _;
    }

    function addFileToIPFS(address _sender, address _receiver, string memory _cid) internal {
        require(msg.sender != _receiver);
        dataHolder[_sender].push(sharedWith(_cid, _receiver, bytes32(block.timestamp)));
        emit addedFileToIPFS(_sender, _receiver, _cid);
    }

    function getFiles(address _sender) external view returns (sharedWith[] memory) {
        return dataHolder[_sender];
    }

    function handle(bytes calldata _data) external onlyMailbox {
    (uint256 callType, bytes memory data) = abi.decode(_data, (uint256, bytes));

    if (callType == 1) {
        (address _senderid, address _receiver, string memory _cid) = abi.decode(data, (address, address, string));
        addFileToIPFS(_senderid, _receiver, _cid);
    }
}
    receive() external payable {}
}

// SPDX-License-Identifier: MIT

