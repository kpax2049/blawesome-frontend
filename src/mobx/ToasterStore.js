import { Intent } from '@blueprintjs/core';

class ToasterStore {
  registerToaster(ref) {
    this.toaster = ref;
  }

  toast(message) {
    const config = {
      intent: Intent.SUCCESS,
      icon: 'tick-circle',
      timeout: 3000,
    };

    if (typeof message === 'object') {
      Object.assign(config, message);
    } else if (typeof message === 'string') {
      config.message = message;
    }
    this.toaster.show(config);
  }
}

export default new ToasterStore();
