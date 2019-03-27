import Vue from 'vue';

import { Toast, Dialog } from 'vant';

Vue.use(Toast, Dialog);

window.$vant = {
    Dialog,
    $toast: Toast,
};
