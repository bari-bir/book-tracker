class StorageWrapper {
    private storage?: Storage

    constructor(type: "local" | "session") {
        try {
            this.storage =
                (type === "local" && typeof window !== "undefined") ? window.localStorage : window.sessionStorage;
        } catch (error) {
            console.error(error)
        }
    }

    get<T>(key: string) {
        if (!this.storage) return;

        try {
            const value = this.storage.getItem(key)
            if (value === null) {
                return;
            }

            return JSON.parse(value) as T;
        } catch (error) {
            console.error(error)
        }
    }

    set(key: string, value: unknown) {
        if (!this.storage) return;

        try {
            const stringValue = JSON.stringify(value)

            this.storage.setItem(key, stringValue)
        } catch (error) {
            console.error(error)
        }
    }

    remove(key: string) {
        if (!this.storage) return;
        this.storage.removeItem(key)
    }

    clear() {
        if (!this.storage) return;
        this.storage.clear()
    }
}


export const localStorageWrapper = new StorageWrapper("local")
export const sessionStorageWrapper = new StorageWrapper("session")