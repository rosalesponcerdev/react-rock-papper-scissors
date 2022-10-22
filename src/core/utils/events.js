export const subscribe = (eventName, listener) => {
	document.addEventListener(eventName, listener);
};

export const unsubcribe = (eventName, listener) => {
	document.removeEventListener(eventName, listener);
};

export const emit = (eventName, data = null) => {
	const event = new CustomEvent(eventName, { detail: data });

	document.dispatchEvent(event);
};
