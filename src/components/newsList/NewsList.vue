<template>
  <div>
    <div v-for="(list, index) in lists" :key="index" class="list">
      <a :href="list.url">{{list.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props:['lists']
}
</script>

<style lang="less" scoped>
.list{
  margin-bottom: .5rem;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(0, 0, 0);
  cursor: pointer;
  &:hover {
    color: red
  }
}
</style>
