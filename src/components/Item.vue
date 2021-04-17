<template>
  <li
      @mouseenter="mouseMove(true)"
      @mouseleave="mouseMove(false)"
      ref="listItem"
  >
    <label>
      <input type="checkbox" style="margin-right: 4px" v-model="ischecked"/>
      <span>{{ item.title }}</span>
    </label>
    <button class="btn btn-danger" style="display:none" ref="btnItem" @click="deleteItem">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      redirect: true
    },
    index: {
      type: Number,
      redirect: true
    }
  },
  mounted() {

  },
  methods: {
    mouseMove(flag) {
      if (flag) {
        this.$refs.listItem.style.backgroundColor = '#eee'
        this.$refs.btnItem.style.display = 'block'
      } else {
        this.$refs.listItem.style.backgroundColor = '#fff'
        this.$refs.btnItem.style.display = 'none'
      }
    },
    deleteItem() {
      this.$store.commit('deleteItem', this.index)
    }
  },
  computed: {
    ischecked: {
      get() {
        return this.$store.state.todos[this.index].status
      },
      set(newValue) {
        this.$store.commit('showstatus', {newValue, index: this.index})
      }
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>