import { safeStorage } from "electron";
import Store from "electron-store";

const store = new Store();

export default class StoreUtils {

    delete(key: string) {
    }

    get(key: string) {
        return store.get(key);
    }

    set(key: string, value: any) {
        store.set(key, value);
    }

    // simple encryption returns Buffer 
    encrypt(value: any) {

        let encryptedBuffer = safeStorage.encryptString(value);
        return encryptedBuffer
    }

    encrypt_and_set(key: string, value: string) {

        let encryptedBuffer = safeStorage.encryptString(value);
        this.set(key, encryptedBuffer);

        return encryptedBuffer
    }

    encyption_is_available() {

        return safeStorage.isEncryptionAvailable();
    }

    decrypt(value: Buffer) {

        return safeStorage.decryptString(value)
    }

    decrypt_and_get(key: string) {

        let value: any = store.get(key);
        return safeStorage.decryptString(value.data)
    }
}
