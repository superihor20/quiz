import produce from 'immer';
import { create } from 'zustand';

export type AlertType = 'error' | 'success';

export type Alert = {
  type: AlertType;
  title: string;
  description?: string;
};

export type Alerts = Map<number, Alert>;

type AlertsState = {
  alerts: Alerts;
  addAlert: (id: number, alert: Alert) => void;
  removeAlert: (id: number) => void;
};

export const useAlertsStore = create<AlertsState>((set) => ({
  alerts: new Map(),
  addAlert: (id, alert) =>
    set(
      produce<AlertsState>((state) => {
        state.alerts.set(id, alert);
      }),
    ),
  removeAlert: (id) =>
    set(
      produce<AlertsState>((state) => {
        state.alerts.delete(id);
      }),
    ),
}));
