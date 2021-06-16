const { sum, subtract } = require('./math')

let result, expected

test('sum add numbers', () => {
	result = sum(7, 3)
	expected = 10

	expect(result).toBe(expected)
})

test('subtract subtracts numbers', () => {
	result = subtract(10, 6)
	expected = 5

	expect(result).toBe(expected)
})

function test(title, callback) {
	try {
		callback()
		console.log(`✔ ${title}`)
	} catch (error) {
		console.error(`❌ ${title}`)
		console.error(error)
	}
}

function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error(`${actual} is not equal to ${expected}`)
			}
		},
	}
}
