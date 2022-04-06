// Import
const { ApiPromise, WsProvider } = require('@polkadot/api');



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


	console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}\n`);

	const argv = process.argv
	//	argv.forEach((value, index)  => {
	//		console.log(`${index}: ${value}`);
	//	});

	const hash = await api.rpc.chain
		.getBlockHash(argv[2]);


	const block = await api.rpc.chain
		.getBlock(hash);

	console.log(`${block}`);

}


main().catch(console.error).finally(() => process.exit());


