import { app, globalShortcut } from 'electron';
export default function registerShortcuts(mainWindow: any) {

    app.whenReady().then(() => {

        // Register a 'CommandOrControl+Q' shortcut listener.
        const register = globalShortcut.register('CommandOrControl+q', () => {

            try {
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