const ele = document.querySelectorAll('script')[1].id
import { header } from './header.js';
import { ssk } from './ssk.js';
import { bpc } from './bpc.js';
import { lbpic } from './lbpic.js';
import { menuTop } from './menuTop.js';
import { menuMiddle } from './menuMiddle.js';
import { menuFooter } from './menuFooter.js';
import { menuTwoPhone } from './menuTwoPhone.js'
import { footer } from './footer.js'
import { detailsPage } from './detailsPage.js';
import { detailsRender } from './detailsRender.js';
import { cartlist } from './cartlist.js';

if (ele == 'index') {
    new header().init();
    new ssk().init();
    new bpc().init();
    new lbpic().init();
    new menuTop().init();
    new menuMiddle().init();
    new menuFooter().init();
    new menuTwoPhone().init();
    new footer().init();
}
if (ele == 'index2') {
    new header().init();
    new ssk().init();
    new detailsRender().init();
    new detailsPage().init();
}
if (ele == 'index3') {
    new cartlist().init();
}