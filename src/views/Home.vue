<!--
 * @Author: your name
 * @Date: 2020-07-23 09:48:43
 * @LastEditTime: 2021-12-14 11:00:23
 * @LastEditors: 赵婷婷
 * @Description: In User Settings Edit
 * @FilePath: \sucai-modal\src\views\Home.vue
-->
<template>
  <div>
    <Editor />
  </div>
</template>

<script>
// @ is an alias to /src
import Editor from '@/components/editor.vue';

export default {
  name: 'Home',
  components: {
    Editor,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
