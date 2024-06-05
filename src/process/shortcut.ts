import { app, globalShortcut } from 'electron';
import { trigger } from './triggered';
export default function shortcut() {

    app.whenReady().then(() => {

        // Register a 'CommandOrControl+Q' shortcut listener.
        const ret = globalShortcut.register('CommandOrControl+q', () => {
            trigger(['ctrl', 'q'])
        })


        if (!ret) {
            console.log('registration failed')
        }

        // Check whether a shortcut is registered.
        console.log(globalShortcut.isRegistered('CommandOrControl+q'))
    })

    app.on('will-quit', () => {

        // Unregister a shortcut.
        globalShortcut.unregister('CommandOrControl+q')

        // Unregister all shortcuts.
        globalShortcut.unregisterAll()
    })

}