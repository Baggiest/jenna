// state of is the app listening or not 
import React from 'react';
import { ListeningState } from '../types/listening-status';
import { create } from 'zustand';


const useListeningStore = create<ListeningState>((set) => ({

    isListening: false,
    toggleListening: () => set((state: any) => ({ isListening: !state.isListening })),
}));

export default useListeningStore;

