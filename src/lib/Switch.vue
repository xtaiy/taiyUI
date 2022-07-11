<template>
  <div>
    <button class="taiy-switch" :class="{'taiy-checked':value}" @click="toggle"> <span></span> </button>
  </div>
</template>

<script lang="ts">

  export default {
    props:{
      value:Boolean
    },
    setup(props,context){
      const toggle=()=>{
         context.emit('update:value',!props.value)
      }
      return {toggle}
    }
  }
</script>

<style lang="scss">
  $h:22px;
  $h2:$h - 4px;
  .taiy-switch{
    height: $h;
    width: $h * 2;
    border:none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h/2;
    transition: all 250ms;
  }
  button.taiy-checked{
    background: #1890ff;
  }
  button.taiy-checked >span{
    left: calc(100% - #{$h2} - 2px);
  }
  button:active{
    > span {width: $h2 + 4px;}
  }
  button.taiy-checked:active{
    > span {width: $h2 + 4px; margin-left: -4px;}
  }
</style>