/*
 * @Author: dongwenjie
 * @Date: 2020-01-19 10:09:52
 * @Last Modified by: dongwenjie
 * @Last Modified time: 2020-01-19 10:36:32
 */
<template>
  <div>
    <svg-icon @click="dialogVisible = true" icon-class="theme" />
    <el-dialog :append-to-body="true" :visible.sync="dialogVisible" title="主题" width="600px">
      <theme-list style="margin-top: -25px;" />
    </el-dialog>
  </div>
</template>

<script>
import themeList from './theme-list'
export default {
  name: 'ToggleTheme',
  components: {
    themeList
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    click () {

    },
    change () {

    },
    init () {

    },
    destroy () {

    }
  }
}
</script>
<style lang="scss" scoped>
</style>
