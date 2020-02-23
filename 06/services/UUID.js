const makeID = key => `ef680${key}-9b35-4933-9b10-52ffa9740042`

export default {
	CONFIG: {
		ID: makeID(100),
		NAME: makeID(101),
		ADV: makeID(102),
		CONN: makeID(104),
		EDDY: makeID(105),
		CLOUD: makeID(106),
		VERSION: makeID(107),
		MTU: makeID(108)
	},
	ENV: {
		ID: makeID(200),
		TEMP: makeID(201),
		PRESSURE: makeID(202),
		HUMIDITY: makeID(203),
		GAS: makeID(204),
		COLOR: makeID(205),
		CONFIG: makeID(206)
	},
	UI: {
		ID: makeID(300),
		LED: makeID(301),
		BTN: makeID(302),
		PIN: makeID(303)
	},
	MOTION: {
		ID: makeID(400),
		CONFIG: makeID(401),
		TAP: makeID(402),
		ORIENTATION: makeID(403),
		QUATERNION: makeID(404),
		STEP: makeID(405),
		RAW: makeID(406),
		EULER: makeID(407),
		ROT_MATRIX: makeID(408),
		HEADING: makeID(409),
		GRAVITY: makeID('40a'),

	},
	SOUND: {
		ID: makeID(500),
		CONFIG: makeID(501),
		DATA: makeID(502),
		STAT: makeID(503),
		MIC: makeID(504)
	},
	BATTERY: {
		ID: makeID('180F')
	}
};