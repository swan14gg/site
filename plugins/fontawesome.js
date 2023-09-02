import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 使用するアイコンをここでインポートする
// 例
// import { faHouse } from "@fortawesome/free-solid-svg-icons";
// library.add(faHouse);
import { faUser } from "@fortawesome/free-solid-svg-icons";
library.add(faUser);

config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
