const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("RandomWinnerGame");
  const token = await Contract.deploy();

  await token.deployed();

  console.log("成功部署合约:", token.address);
}

// 运行脚本
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});