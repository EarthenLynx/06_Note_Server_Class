const s = require('../model/System.model');

test('Checks the uptime method for proper functionality', () => {
	const uptime = s.getUptime('m');
	expect(uptime).toBeDefined();
	expect(uptime).toMatchObject({
		days: expect.any(Number),
		hours: expect.any(Number),
		minutes: expect.any(Number),
		months: expect.any(Number),
		seconds: expect.any(Number),
	});
});

test('Checks if the platform object is properly formatted', () => {
	const platform = s.getPlatform();
	expect(platform).toBeDefined();
	expect(platform).toMatchObject({
		arch: expect.any(String),
		release: expect.any(String),
		platform: expect.any(String),
		version: expect.any(String),
	});
});

test('Checks if the user object is properly formatted', () => {
	const user = s.getUser();
	expect(user).toBeDefined();
	expect(user).toMatchObject({
		userInfo: expect.any(Object),
		homedir: expect.any(String),
	});
});

test('Checks if the memory object is properly formatted', () => {
	const memory = s.getMemory();
	expect(memory).toBeDefined();
	expect(memory).toMatchObject({
		bytes: expect.any(Object),
		percent: expect.any(Object),
	});
	expect(memory.bytes.freemem).toBeGreaterThan(0);
	expect(memory.bytes.totalmem).toBeGreaterThan(0);
	expect(memory.bytes.usedmem).toBeGreaterThan(0);
	expect(memory.percent.freemem).toBeLessThan(100);
	expect(memory.percent.usedmem).toBeLessThan(100);
});
