import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface OperationStatusStore {
  isOpen: boolean;
}

const useOperationStatusStore = create<OperationStatusStore>()(
  devtools(
    (): OperationStatusStore => ({
      isOpen: false,
    }),
    { name: 'operation-status-store' },
  ),
);

export function setOperationStatus(isOpen: boolean) {
  useOperationStatusStore.setState(
    () => ({ isOpen }),
    false,
    'operation-status/setOpeartionStatus',
  );
}

export function getOperationStatus(): boolean {
  return useOperationStatusStore.getState().isOpen;
}
