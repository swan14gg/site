import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 使用するアイコンをここでインポートする
// 例
import {
  faUser,
  faStar,
  faGamepad,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser);
library.add(faStar);
library.add(faGamepad);
library.add(faFilePen);

config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
