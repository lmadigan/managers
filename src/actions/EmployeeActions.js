import {
  EMPLOYEE_UPDATE
} from './types';

export const EmployeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
};
// one action creator that can update any action on form
