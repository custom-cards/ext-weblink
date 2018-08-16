class ExtWebLink extends HTMLElement {
  set hass(hass) {
    if (!this.config.icon) {
      this.config.icon = "mdi:home-assistant";
    }
    if (!this.config.entity) {
      var state = "";
    } else {
      var state = hass.states[this.config.entity].state;
    }
    if (this.config.name) {
      var name = this.config.name;
    } else {
      var name = hass.states[this.config.entity].attributes.friendly_name;
    }
    if (!this.config.url) {
      this.config.url = "#";
    } 
    this.innerHTML =`
      <style>
        a {
          align-items: center;
          color: var(--primary-color);
          text-decoration-line: none;
        }
        ha-icon {
          padding: 8px;
          color: var(--paper-item-icon-color);
        }
        ha-icon .innline {
          padding: 0px;
          color: var(--paper-item-icon-color);
        }
        div {
          flex: 1;
          padding-right: 8px;
          padding-left: 8px;
          padding-top: 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        div .state {
          text-align: right;
        }
        div .name {
          text-align: left;
          overflow: visible;
          
        }
        div .main {
          display: flex;
        }
      </style>
      <div class="main">
        
          <ha-icon icon="${this.config.icon}"></ha-icon>
          <div class="name">${name}</div>
          <a href="${this.config.url}" target="_blank"><ha-icon icon="mdi:open-in-new" class="innline"></ha-icon></a>
          <div class="state">${state}</div>
        
      </div>
    `;
  }
  setConfig(config) {
    this.config = config;
  }

  getCardSize() {
    return 1;
  }
}
customElements.define('ext-weblink', ExtWebLink);