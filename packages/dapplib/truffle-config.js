require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture strong riot sister cluster hunt kiwi outer gentle'; 
let testAccounts = [
"0xfe06f95b14462b69ff9b06d5daa7b270937d683098585a5544967767dea400c6",
"0xb49f42858cfc34824eb6c0856aff44e1cb9bccacfaceab4d4d97c4f808a5eae0",
"0xe779728dc9f84dc0873cf39e2d82a972d0f19e901b04f8c18bdfacae94e24f51",
"0x2ca4d302b725a9d9ea80aa8cf36c20df1e1e8d0658ff99a7e562ad2919748082",
"0xa92554f6fe2c13158892a553514c5066eab84ac62e5b6886346089cc1c5f75ab",
"0xef8aa64e3a69ff0911c6e941ba3526af04e40c0fbc58c091f2d9d14c08536ff8",
"0x7d754c7dd01b57bcbea348a426923ce51af4d975e8ea7634d25b2b5764003bab",
"0x170aeee89917c727a1429d5f7926396693de66511c20c2d3614f807e6d6df5c6",
"0xf954919c303c2bef0ccc6551a0d14b6c7bff0f2f3bddb5185675613e03113259",
"0x6ecf465eb2bac12eccd551030c16043ff9f15272eba3c32731f9b58815c484d2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

