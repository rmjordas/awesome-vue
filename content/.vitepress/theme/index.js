import DefaultTheme from 'vitepress/theme';
import './custom.css';

import ProjectList from '../components/ProjectList.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectList', ProjectList)
  }
}
