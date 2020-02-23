import UUID from './UUID.js';
export default async (server, cb) => {
	const service = await server.getPrimaryService(UUID.UI.ID);
	const char = await service.getCharacteristic(UUID.UI.BTN);
	await char.startNotifications();
	return char.addEventListener('characteristicvaluechanged', e => cb(e.target.value.getUint8()));
}
