import { create } from "zustand";

const useTooltip = create((set) => ({
    visible: false,
    onHover: () => set((state) => ({ visible: !state.visible })),
    notHover: () => set((state) => ({ visible: !state.visible }))
}));

export default useTooltip;
