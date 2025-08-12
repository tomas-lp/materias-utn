import { create } from 'zustand';

export type UserData = {
  nombre: string;
  carrera: string;
  cursando: {
    id: string;
    comision: string;
  }[];
  regulares: string[];
  aprobadas: string[];
  temporal?: { id: string; comision: string } | null;
};

interface UserDataState {
  userData: UserData | null;
  darkMode: boolean;
  setUserData: (data: UserData) => void;
  addCursando: (id: string, comision: string) => void;
  removeCursando: (id: string) => void;
  addRegular: (id: string) => void;
  removeRegular: (id: string) => void;
  addAprobada: (id: string) => void;
  removeAprobada: (id: string) => void;
  setTemporal: (id: string, comision: string) => void;
  clearTemporal: () => void;
  toggleDarkMode: () => void;
}

export const useUserDataStore = create<UserDataState>()((set, get) => {
  // Al inicializar el store, cargar userData de localStorage
  let initialUserData: UserData | null = null;
  try {
    const rawData = localStorage.getItem('userData');
    if (rawData) {
      initialUserData = JSON.parse(rawData);
    }
  } catch {
    initialUserData = null;
  }

  // Al inicializar el store, cargar darkMode de localStorage
  let initialDarkMode: boolean;
  const rawDarkMode = localStorage.getItem('darkMode');
  if (rawDarkMode) {
    initialDarkMode = JSON.parse(rawDarkMode);
  } else {
    initialDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.setItem('darkMode', initialDarkMode.toString());
  }

  return {
    userData: initialUserData,
    darkMode: initialDarkMode,

    setTemporal: (id, comision) => {
      const userData = get().userData;
      if (!userData) return;
      const newUserData = {
        ...userData,
        temporal: { id, comision },
      };
      set({ userData: newUserData });
      localStorage.setItem('userData', JSON.stringify(newUserData));
    },

    clearTemporal: () => {
      const userData = get().userData;
      if (!userData) return;
      const newUserData = {
        ...userData,
        temporal: null,
      };
      set({ userData: newUserData });
      localStorage.setItem('userData', JSON.stringify(newUserData));
    },

    setUserData: (data) => {
      set({ userData: data });
      localStorage.setItem('userData', JSON.stringify(data));
    },

    addCursando: (id, comision) => {
      const userData = get().userData;
      if (!userData) return;
      const newUserData = {
        ...userData,
        cursando: [...userData.cursando, { id, comision }],
      };
      set({ userData: newUserData });
      localStorage.setItem('userData', JSON.stringify(newUserData));
    },

    removeCursando: (id) => {
      const userData = get().userData;
      if (!userData) return;
      const newUserData = {
        ...userData,
        cursando: userData.cursando.filter((m) => m.id !== id),
      };
      set({ userData: newUserData });
      localStorage.setItem('userData', JSON.stringify(newUserData));
    },

    addRegular: (id) => {
      const userData = get().userData;
      if (!userData) return;
      // Eliminar de cursando y de aprobadas si estuviera
      const newUserData = {
        ...userData,
        cursando: userData.cursando.filter((m) => m.id !== id),
        aprobadas: userData.aprobadas.filter((aid) => aid !== id),
        regulares: userData.regulares.includes(id)
          ? userData.regulares
          : [...userData.regulares, id],
      };
      set({ userData: newUserData });
      localStorage.setItem('userData', JSON.stringify(newUserData));
    },

    removeRegular: (id) => {
      const userData = get().userData;
      if (!userData) return;
      const newUserData = {
        ...userData,
        regulares: userData.regulares.filter((rid) => rid !== id),
      };
      set({ userData: newUserData });
      localStorage.setItem('userData', JSON.stringify(newUserData));
    },

    addAprobada: (id) => {
      const userData = get().userData;
      if (!userData) return;
      // Eliminar de cursando y de regulares si estuviera
      const newUserData = {
        ...userData,
        cursando: userData.cursando.filter((m) => m.id !== id),
        regulares: userData.regulares.filter((rid) => rid !== id),
        aprobadas: userData.aprobadas.includes(id)
          ? userData.aprobadas
          : [...userData.aprobadas, id],
      };
      set({ userData: newUserData });
      localStorage.setItem('userData', JSON.stringify(newUserData));
    },

    removeAprobada: (id) => {
      const userData = get().userData;
      if (!userData) return;
      const newUserData = {
        ...userData,
        aprobadas: userData.aprobadas.filter((aid) => aid !== id),
      };
      set({ userData: newUserData });
      localStorage.setItem('userData', JSON.stringify(newUserData));
    },

    toggleDarkMode: () => {
      set({ darkMode: !get().darkMode });
      localStorage.setItem('darkMode', get().darkMode.toString());
    },
  };
});
