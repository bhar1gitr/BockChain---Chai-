const hre = require("hardhat");
const ethers = hre.ethers;  // Import the ethers library

async function main() {
  const [deployer] = await ethers.getSigners();

  const chai = await ethers.getContractFactory("Chai");
  
  // Pass overrides when deploying the contract
  const contract = await chai.deploy();

  console.log(contract);
  console.log('Created');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
