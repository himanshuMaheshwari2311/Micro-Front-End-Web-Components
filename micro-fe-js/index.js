class JSElement extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<p> Vanilla js works fine </p>';
    }

    disconnectedCallback() {

    }
}

window.customElements.define('js-element', JSElement);