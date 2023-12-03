import {create} from 'zustand';

import {ToastService} from './toastTypes';

//Creat context zustand
const useToasStore = create<ToastService>(set => ({
  toast: null,
  showToast: toast => set({toast}),
  hideToast: () => set({toast: null}),
}));

export function useToastZustand(): ToastService['toast'] {
  return useToasStore(state => state.toast);
}

export function useToastServiceZustand(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  const showToast = useToasStore(state => state.showToast);
  const hideToast = useToasStore(state => state.hideToast);

  return {
    showToast,
    hideToast,
  };
}
