<template>
  <div>Button 示例</div>
  <h1> 示例1 </h1>
  <div>
    <Button> 按钮 </Button>
    <Button theme="button"> 按钮 </Button>
    <Button theme="link"> 链接 </Button>
    <Button theme="text"> 文本 </Button>
  </div>
  <h1> 示例2 </h1>
  <div>
    <Button size="big"> 大按钮 </Button>
    <Button> 正常按钮 </Button>
    <Button size="small"> 小按钮 </Button>
  </div>
  <div>
    <Button theme="link" size="big"> 大按钮 </Button>
    <Button theme="link"> 正常按钮 </Button>
    <Button theme="link" size="small"> 小按钮 </Button>
  </div>
  <div>
    <Button theme="text" size="big"> 大按钮 </Button>
    <Button theme="text"> 正常按钮 </Button>
    <Button theme="text" size="small"> 小按钮 </Button>
  </div>

</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  components: {Button},
  setup(){
    const onClick=()=>{
      console.log('aaa')
    }
    const onMouseOver=()=>{}
    return {onClick,onMouseOver}
  }
}
</script>

<style lang="scss" scoped>

</style>