import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import initTaabNav from './modules/tabNav.js';
import initModal from './modules/modal.js';
import initTolltop from './modules/tooltip.js';
import initDropDownmenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initFetchAnimais from './modules/fetch-animais.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js'
import initiAnimacaoScroll from './modules/scroll-animacao.js';



const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initTaabNav();
initModal();
initTolltop();
initDropDownmenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initiAnimacaoScroll();
