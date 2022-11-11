import { Causiq } from '@causiq/sdk';

import "./scss/main.scss"

(function (  ) {
    'use strict'
    const c = new Causiq();
    c.init('CQ-H1A23LDP9ABC', (config, { sendWithConsole }) => ({
        send: typeof window === 'undefined' ? config.send : sendWithConsole
    }));

})()