/**
 * Test auto-detection of CodeSandbox/StackBlitz environments
 * Run: npm run test:codesandbox
 */

function testEnvironmentDetection() {
	console.log('🧪 Testing Environment Detection\n');
	
	// Save original env
	const originalEnv = { ...process.env };
	
	function checkDetection(description, envVars) {
		// Set test env vars
		Object.assign(process.env, envVars);
		
		// Simulate detection logic from vite.js
		const isCodeSandbox = !!(process.env.CODESANDBOX_SSE || process.env.SANDBOX_ID || process.env.CODESANDBOX);
		const isStackBlitz = !!(process.env.SHELL?.includes('webcontainer'));
		const needsPhysicalFile = isCodeSandbox || isStackBlitz;
		
		console.log(`${description}:`);
		console.log(`  CodeSandbox detected: ${!!isCodeSandbox}`);
		console.log(`  StackBlitz detected:  ${!!isStackBlitz}`);
		console.log(`  Needs physical file:  ${needsPhysicalFile}`);
		console.log(`  Result: ${needsPhysicalFile ? '✅ Will write physical file' : '❌ Will use virtual module'}\n`);
		
		// Restore original env
		process.env = { ...originalEnv };
		
		return needsPhysicalFile;
	}
	
	// Test cases
	const tests = [
		{
			name: 'Local Development',
			env: {},
			expected: false
		},
		{
			name: 'CodeSandbox (CODESANDBOX_SSE)',
			env: { CODESANDBOX_SSE: 'true' },
			expected: true
		},
		{
			name: 'CodeSandbox (SANDBOX_ID)',
			env: { SANDBOX_ID: 'abc123' },
			expected: true
		},
		{
			name: 'CodeSandbox (CODESANDBOX)',
			env: { CODESANDBOX: 'true' },
			expected: true
		},
		{
			name: 'StackBlitz',
			env: { SHELL: '/bin/webcontainer-shell' },
			expected: true
		},
		{
			name: 'Normal Shell',
			env: { SHELL: '/bin/bash' },
			expected: false
		},
	];
	
	let passed = 0;
	let failed = 0;
	
	tests.forEach(test => {
		const result = checkDetection(test.name, test.env);
		if (result === test.expected) {
			passed++;
		} else {
			failed++;
			console.log(`❌ FAILED: Expected ${test.expected}, got ${result}\n`);
		}
	});
	
	console.log('─'.repeat(50));
	console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);
	
	if (failed === 0) {
		console.log('✅ All tests passed!\n');
		process.exit(0);
	} else {
		console.log('❌ Some tests failed\n');
		process.exit(1);
	}
}

testEnvironmentDetection();
