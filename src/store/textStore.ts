import { create } from 'zustand';

interface TextState {
    text: string;
}

interface TextActions {
    setText: (newText: string) => void;
    appendText: (additionalText: string) => void;
    clearText: () => void;
}

export const useTextStore = create<TextState & TextActions>((set) => ({
    text: '',
    setText: (newText: string) => set({ text: newText }),
    appendText: (additionalText: string) =>
        set((state) => ({ text: state.text + additionalText })),
    clearText: () => set({ text: '' }),
}));
export type TextStore = ReturnType<typeof useTextStore>;