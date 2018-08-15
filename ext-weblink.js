class ExtWebLink extends HTMLElement {
  setConfig(config) {
    if (!config || !config.name || !config.url) {
      throw new Error('Error in card configuration.');
    }
    this.innerHTML = `
      <style>
        a {
          display: flex;
          align-items: center;
          color: var(--primary-color);
        }
        ha-icon {
          padding: 8px;
          color: var(--paper-item-icon-color);
        }
        div {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-left: 16px;
        }
      </style>
      <a href="${config.url}" target="_blank">
      <ha-icon icon="${config.icon}"></ha-icon>
        <div>
          ${config.name}
        </div>
      </a>
    `;
  }
  getCardSize() {
    return 1;
  }
}
customElements.define('ext-weblink', ExtWebLink);