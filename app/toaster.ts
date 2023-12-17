import toast from 'react-hot-toast';
import { formState } from '@/types';


export const toaster = {
  send: (msg: formState) => {
    if (msg.type === 'success') {
      toast.success(msg.message);
      return;
    }

    if (msg.type === 'error') {
      toast.error(msg.message);
      return;
    }

    if (msg.type === 'warning' || msg.type === 'info') {
      // Maybe some day we create a new style for this
      toast(msg.message);
    }
  },
}
