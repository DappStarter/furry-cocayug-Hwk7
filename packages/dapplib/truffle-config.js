require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture stomach response mirror connect install define army gauge'; 
let testAccounts = [
"0x79ec84ecc272e3829900ebb96db5c8e6d60ff0f9f7a2b8bd98a5b90ac93f3eec",
"0xe720e17182055eee588857a52699f231a4e6cee0370dd3f729d883b97a1eae69",
"0x3677904c1dd3008307e66f5d9b8188b8d567ab361d17cee5f3a9bc14a69eb2dc",
"0x5b6291ee2ace01c9107ea0f72fc8d290fa3f05990c4e164dc7ccb858c4b00853",
"0xdf920ba1f72f2054881c044ead6ae2a109d04bbde2af341c986d512a02b48eb8",
"0x0937d4e52d5629a9788d260012a2010e2a1e936c946a6ca5308b77bc201c3ead",
"0x747accad858b9c0f914c75c22449f275e3bddc34e974cb79154d803c963f6a8b",
"0x497b22de45f211c811cc26c80090505a5535476ddcd91e81a0fc6b6bfe890ea9",
"0x644057cceae85b0e00df967496bd733fe1688201e91add3ba637594a8195e884",
"0x112ed7d744c76b8d2dcf0fcf548256c316a54c8ee8cff21ada97568a5b4ce58d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


