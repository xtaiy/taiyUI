<template>
  <button class="taiy-switch" @click="toggle" :class="{'taiy-checked':value}">
    <span></span>
  </button>
</template>
<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.taiy-switch {
  height: $h; width: $h * 2; border: none; background: #bfbfbf; border-radius: 11px; position: relative;
  > span {
    position: absolute; top: 2px; left: 2px; height: $h2; width: $h2; background: white; border-radius: calc(#{$h2}/2); transition: all 250ms;
  }
  &.taiy-checked { background: #1890ff;
    > span { left: calc(100% - #{$h2} - 2px); }
  }
  &:focus { outline: none; }
  &:active {
    > span { width: $h2 + 4px; }
  }
  &.taiy-checked:active {
    > span { width: $h2 + 4px; margin-left: -4px; }
  }
}
</style>