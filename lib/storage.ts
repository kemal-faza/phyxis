export function createStorage<T>(key: string, defaultValue: T | null = null) {
  return {
    save(value: T): void {
      try {
        localStorage.setItem(key, JSON.stringify(value))
      } catch (e) {
        console.warn(`Failed to save ${key} to localStorage`, e)
      }
    },
    load(): T | null {
      try {
        const raw = localStorage.getItem(key)
        return raw ? (JSON.parse(raw) as T) : defaultValue
      } catch (e) {
        console.warn(`Failed to load ${key} from localStorage`, e)
        return defaultValue
      }
    },
    clear(): void {
      try {
        localStorage.removeItem(key)
      } catch (e) {
        console.warn(`Failed to clear ${key} from localStorage`, e)
      }
    },
  }
}
