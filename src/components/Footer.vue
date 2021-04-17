<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isDoneAllTodo"/>
    </label>
    <span>
          <span>已完成{{ doneTodo }}</span> / 全部{{ allTodo }}
        </span>
    <button class="btn btn-danger" v-show="this.doneTodo" @click="clearDoneItem">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    doneTodo() {
      return this.$store.state.todos.filter(item => {
        return item.status === true
      }).length
    },
    allTodo() {
      return this.$store.state.todos.length
    },
    isDoneAllTodo: {
      get() {
        return this.doneTodo === this.allTodo && this.allTodo
      },
      set(newValue) {
        this.$store.commit('showStatus', newValue)
      }
    }
  },
  methods: {
    clearDoneItem() {
      this.$store.commit('clearAllDoneItem')
    }
  }
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>