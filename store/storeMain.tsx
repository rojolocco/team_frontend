import { create } from 'zustand';

interface MainState {
    currentContent: string;
    setCurrentContent: (content: string) => void;
}

export const useMainStore = create<MainState>((set) => ({
    currentContent: 'billing',
    setCurrentContent: (content) => set({ currentContent: content }),
}));