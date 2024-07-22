import { contextBridge, ipcRenderer } from 'electron';

interface API {
    func: (x: string | number) => void;
}

const API: API = {
    func: (x: string | number) => ipcRenderer.send("example", x)
};

contextBridge.exposeInMainWorld("api", API);