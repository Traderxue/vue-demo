import { createI18n } from "vue-i18n";
import zh from './zh.js'
import zh_hk from './zh-hk.js'
import en from './en.js'

const i18n = createI18n({
    locale:'zh',
    messages:{
        zh,
        zh_hk,
        en
    }
})

export default i18n