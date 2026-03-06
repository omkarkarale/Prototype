import { create } from "zustand";

interface PortfolioState {
   activeSection: string;
   scrollProgress: number;
   isMobile: boolean;
   isLoaded: boolean;
   setActiveSection: (section: string) => void;
   setScrollProgress: (progress: number) => void;
   setIsMobile: (mobile: boolean) => void;
   setIsLoaded: (loaded: boolean) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
   activeSection: "hero",
   scrollProgress: 0,
   isMobile: false,
   isLoaded: false,
   setActiveSection: (section) => set({ activeSection: section }),
   setScrollProgress: (progress) => set({ scrollProgress: progress }),
   setIsMobile: (mobile) => set({ isMobile: mobile }),
   setIsLoaded: (loaded) => set({ isLoaded: loaded }),
}));
