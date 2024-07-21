import { safeStorage } from "electron";
// import { expect, test } from "vitest"
import StoreUtils from "./store";

let store = new StoreUtils();

export function test_store() {

    // let encrypted = store.encrypt_and_set("dick", "balls")
    // console.log({encrypted})

    // let decrypted = store.decrypt_and_get("dick")

    // console.log({ encrypted, decrypted })

    // let getter = store.get("dick")
    // console.log(getter)

    let encrypted = store.encrypt("super_secret_key");
    console.log(encrypted.toString("base64"))
}

// test("Testing encryption", () => {
//     expect(store.encrypt("super_secret_key").toString("base64")).toBe("djExm91vqk6j1pXQQFGu3D5Wi/M2fZLPkrO6Pb3YdYA8/FM=")
// })