import { h, defineComponent } from "vue";
import markdownIt from "markdown-it";

export default defineComponent({
  props: {
    text: {type: String, required: true},
  },
  setup(props) {
    const renderer = markdownIt({ html: true });
    return () => h(
      "div",
      {
        innerHTML: renderer.render(props.text),
      },
    )
  },
})
