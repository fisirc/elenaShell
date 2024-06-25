import { Terminal } from '@xterm/xterm';
import { WebLinksAddon } from '@xterm/addon-web-links';

const terminal = new Terminal();

terminal.loadAddon(new WebLinksAddon());