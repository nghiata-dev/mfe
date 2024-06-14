//events.js

function subscribe(eventName, listener) {
  window.addEventListener(eventName, listener);
}

function unsubscribe(eventName, listener) {
  window.removeEventListener(eventName, listener);
}

function publish(eventName, data) {
  const event = new CustomEvent(eventName, { detail: data });
  window.dispatchEvent(event);
}

export { publish, subscribe, unsubscribe };
