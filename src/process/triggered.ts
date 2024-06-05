/* eslint-disable prefer-const */
import { ListeningState } from "../types/listening-status";
import useListeningStore from "../view/store";

// let isListening = useListeningStore((state: any) => { state.isListening })

export function trigger(keys_pressed: string[]) {

    const { isListening, toggleListening }: ListeningState = useListeningStore.getState()


    console.log('The user pressed ' + keys_pressed.join('+'));
    toggleListening()
    console.log(isListening)
}
