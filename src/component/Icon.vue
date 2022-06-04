<script lang="ts">
import {
  AbstractElement,
  icon,
  Icon,
  IconName,
} from '@fortawesome/fontawesome-svg-core';
import { defineComponent, h, PropType, VNode } from 'vue';

export default defineComponent({
  props: {
    name: { type: String as PropType<IconName>, default: 'square' },
  },
  render() {
    const { name: iconName } = this.$props;

    const i: Icon | undefined = icon({ iconName, prefix: 'fas' }, {});
    return i ? renderElement(i.abstract[0]) : h('svg');
  },
});

function renderElement(el: AbstractElement): VNode {
  return h(
    el.tag,
    el.attributes,
    el.children?.map(c => renderElement(c)),
  );
}
</script>
