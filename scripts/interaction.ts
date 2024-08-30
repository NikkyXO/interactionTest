import { ethers } from "hardhat";

async function main() {
    const web3CXITokenAddress = "";
    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

    const saveERC20ContractAddress = "";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log(depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    console.log("Contract balance after :::", contractBalanceAfterDeposit);


    // Withdrawal Interaction

    const withdrawAmount = ethers.parseUnits("10", 18);
    const withdrawTx = await saveERC20.deposit(withdrawAmount);

    console.log(withdrawTx);

    withdrawTx.wait();

    const contractBalanceAfterWithdraw = await saveERC20.getContractBalance();

    console.log("Contract balance after :::", contractBalanceAfterWithdraw);
    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
