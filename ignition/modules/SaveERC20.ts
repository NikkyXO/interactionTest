import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x59A591810F6636Ad65e2B7884AeFC7F956F4Ea51";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1
