import { app, globalShortcut } from 'electron';
export default function shortcut(mainWindow: any) {

    app.whenReady().then(async () => {

        // Register a 'CommandOrControl+Q' shortcut listener.
        const register = globalShortcut.register('CommandOrControl+q', async () => {

            // send start-microphone through ipc

            try {
                // mainWindow.api.send('toggle-microphone')
                console.log(mainWindow.api)
                console.log("The user pressed Ctrl+Q");
            }
            catch (error) {
                console.log(error);
            }
        })

        if (!register) {
            console.log('registration failed');
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