import UUID from './UUID.js';

export default async () => {
	const device = await navigator.bluetooth.requestDevice({
		// filters: [{
		// 	services: [UUID.CONFIG.ID],
		// }],
		acceptAllDevices: true,
		optionalServices: [
			"battery_service",
			UUID.CONFIG.ID,
			UUID.ENV.ID,
			UUID.UI.ID,
			UUID.MOTION.ID,
			UUID.SOUND.ID,
		]
	});
	const server = await device.gatt.connect();
	return {
		device,
		server
	};
}