import UUID from './UUID.js';
export default async server => {
	const service = await server.getPrimaryService(UUID.UI.ID);
	const led = await service.getCharacteristic(UUID.UI.LED);
	return {
		set(mode, color) {
			if (mode === 0) {
				return led.writeValue(new Uint8Array([0]));
			}
			let data = [mode, ...color];
			led.writeValue(new Uint8Array(data));
		}
	};
}