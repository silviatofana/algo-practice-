class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    addListener(topic, listener) {
      if (!this.events[topic]) {
        this.events[topic] = [];
      }
      this.events[topic].push(listener);
    }
  
    removeListener(topic, listener) {
      if (!this.events[topic]) {
        return;
      }
      const index = this.events[topic].indexOf(listener);
      if (index > -1) {
        this.events[topic].splice(index, 1);
      }
    }
  
    emit(topic, ...args) {
      if (!this.events[topic]) {
        return;
      }
      this.events[topic].forEach(listener => listener.apply(this, args));
    }
  }