export function cache<T, K extends any[]>(fn: (...args: K) => T): (...args: K) => T {
	const cache = new Map<string, T>();

	return (...args: K) => {
		const key = JSON.stringify(args);
		if (cache.has(key)) {
			return cache.get(key)!;
		}

		const result = fn(...args);
		cache.set(key, result);
		return result;
	};
}
