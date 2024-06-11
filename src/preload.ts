// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

console.log('Preload script is loaded. Yippieeeeeeee!');

import { contextBridge } from 'electron';


const API = {

    hello: () => console.log('hello')
    // send: (channel: string, ...args: any[]) => ipcRenderer.send(channel, ...args),
    // on: (channel: string, func: (...args: any[]) => void) => {
    //     ipcRenderer.on(channel, (event, ...args) => func(...args));
    // },
    // removeListener: (channel: string, func: (...args: any[]) => void) => {
    //     ipcRenderer.removeListener(channel, func);
    // },
}
contextBridge.exposeInMainWorld('api', API)
