import { Address, toNano, WalletTypes } from "locklift";

// you can pass this parameters by cli or get them by some file reading for example or calculate an address with locklift.provider.getExpectedAddress()
// we just hardcode it here
const NFT_ADDRESS = new Address("0:e115aa13a2c590743f6e2543246decf0e11f498455fee16a1362a7c6672eec2c");
const AUCTION_ADDRESS = new Address("0:23a5ad6a5d66687cbb55197ef4d2f58080db57cd039ed4a988da92dbd381dd55");

async function main() {
  const signer = (await locklift.keystore.getSigner("0"))!;
  // creating new account for Collection calling (or you can get already deployed by locklift.factory.accounts.addExistingAccount)
  const someAccount = await locklift.factory.accounts.addExistingAccount({
    type: WalletTypes.WalletV3,
    publicKey: signer.publicKey,
  });
  // instantiate NFT contract
  const nftInstance = await locklift.factory.getDeployedContract("Nft", NFT_ADDRESS);
  // and call a transfer method to auction from owner
  await nftInstance.methods
    .transfer({
      to: AUCTION_ADDRESS,
      sendGasTo: someAccount.address,
      // take attention! Next field is important for calling our onNftTransfer callback!
      // you may lose your NFT if you don't set up callback for auction here!
      callbacks: [[AUCTION_ADDRESS, { value: toNano(0.1), payload: "" }]],
    })
    .send({
      from: someAccount.address,
      amount: toNano(2),
    });

  console.log(`NFT has been sent`);
  console.log(signer);
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
