// Import
import { ApiPromise, WsProvider } from '@polkadot/api'



async function main() {

// Construct
const wsProvider = new WsProvider('ws://127.0.0.1:9944');
const api = await ApiPromise.create({ provider: wsProvider });

// Do something

const [chain, nodeName, nodeVersion] = await Promise.all([
	api.rpc.system.chain(),
	api.rpc.system.name(),
	api.rpc.system.version()
	]);


console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);	

	const block = await api.rpc.chain.getBlock('0x6a82f1195bdf267a47f71f1de980ad9316cd75cc5acdc98492f0573cb4738864');

console.log(`${block}`);

}


main().catch(console.error).finally(() => process.exit());


