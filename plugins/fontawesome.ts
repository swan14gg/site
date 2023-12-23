import { library, config } from "@fortawesome/fontawesome-svg-core";
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 使用するアイコンをここでインポートする
// 例
import {
  faUser,
  faStar,
  faGamepad,
  faFilePen,
  faNoteSticky,
  faCircleExclamation,
  faMusic,
  faSun,
  faMoon,
  faPersonChalkboard,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser);
library.add(faStar);
library.add(faGamepad);
library.add(faFilePen);
library.add(faNoteSticky);
library.add(faCircleExclamation);
library.add(faMusic);
library.add(faSun);
library.add(faMoon);
library.add(faPersonChalkboard);
library.add(faShieldHalved);

config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
