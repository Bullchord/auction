import { toNano, WalletTypes } from "locklift";

const COLLECTION_DEPLOY_PUBLIC_KEY = "e85f61aaef0ea43afc14e08e6bd46c3b996974c495a881baccc58760f6349300"

async function main() {
    const signer = (await locklift.keystore.getSigner("0"))!;
    const collectionArtifacts = await locklift.factory.getContractArtifacts("Collection");
    const nftArtifacts = await locklift.factory.getContractArtifacts("Nft");

    // calculation of deployed Collection contract address
    const collectionAddress = await locklift.provider.getExpectedAddress(
        collectionArtifacts.abi,
        {
            tvc: collectionArtifacts.tvc,
            publicKey: COLLECTION_DEPLOY_PUBLIC_KEY,
            initParams: {} // we don't have any initParams for collection
        }
    );
    // initialize contract object by locklift
    const collectionInstance = await locklift.factory.getDeployedContract(
        "Collection",
        collectionAddress
    );

    // creating new account for Collection calling (or you can get already deployed by locklift.factory.accounts.addExistingAccount)
    const { account: someAccount } = await locklift.factory.accounts.addNewAccount({
        type: WalletTypes.WalletV3,
        value: toNano(10),
        publicKey: signer.publicKey
    });
    // call mintNft function
    // firstly get current nft id (totalSupply) for future NFT address calculating
    // call mintNft function
    // firstly get current nft id (totalSupply) for future NFT address calculating
    // const {count: nftId} = await nftInstance.methods.totalSupply({ answerId: 0 }).call();
    const {count: id} = await collectionInstance.methods.totalSupply({ answerId: 0 }).call();
    await collectionInstance.methods.mintNft({ json: `{"name":"hello world"}` }).send({ from: someAccount.address, amount: toNano(1)});
    const {nft: nftAddress} = await collectionInstance.methods.nftAddress({ answerId: 0, id: id }).call();
  
    console.log(`NFT: ${nftAddress.toString()}`);
    console.log(someAccount);
    
}
  
main()
    .then(() => process.exit(0))
    .catch(e => {
        console.log(e);
        process.exit(1);
    });
  