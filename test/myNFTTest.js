const {expect} = require("chai")
const {ethers} = require("hardhat")

describe("myNFT", function () {
    it("should mint and transfer an NFT to someone", async function () {
        const firedup = await ethers.getContractFactory("FiredUp");
        const firedUp = await firedup.deploy();
        await firedUp.deployed();

        const recipient = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0";
        const metadataURI = "cid/test.png";

        let balance = await firedUp.balanceOf(recipient);
        expect(balance).to.equal(0)

        const newlyMintedToken = await firedUp.PayToMint(recipient, metadataURI, {value: ethers.utils.parseEther("0.03")})
    })
})