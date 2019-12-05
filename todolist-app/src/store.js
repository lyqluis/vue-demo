import Vue from 'vue'
import Vuex from 'vuex'
import { today, tomorrow } from './assets/js/util.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // addId: window.localStorage.todoData ? JSON.parse(window.localStorage.todoData).addId : 10,
    // todos: window.localStorage.todoData ? JSON.parse(window.localStorage.todoData).todos :
    addId: 10,
    todos: [
      {
        icon: 'user',
        name: 'Personal',
        colors: ['#ff6262', '#ffa947'],
        tasks: [
          {
            id: 1,
            date: new Date().getTime(),
            title: 'gym',
            done: false
          },
          {
            id: 2,
            date: new Date().getTime(),
            title: 'gym1',
            done: false
          },
          {
            id: 3,
            date: new Date().getTime(),
            title: 'gym4',
            done: false
          },
          {
            id: 4,
            date: new Date(2019, 10, 30),
            title: '昨天洗澡',
            done: true
          },
          {
            id: 5,
            date: new Date(2019, 11, 4),
            title: '以后',
            done: false
          },
        ]
      },
      {
        icon: 'briefcase',
        name: 'Work',
        colors: ['#5b9df9', '#47bfff'],
        tasks: [
          {
            id: 6,
            date: new Date().getTime(),
            title: 'meeting',
            done: true
          },
          {
            id: 7,
            date: new Date().getTime(),
            title: 'weekly report',
            done: false
          }
        ]
      },
      {
        icon: 'home',
        name: 'Home',
        colors: ['#2c7d59', '#3ba776'],
        tasks: [
          {
            id: 8,
            date: new Date().getTime(),
            title: 'shopping',
            done: false
          },
          {
            id: 9,
            date: new Date().getTime(),
            title: 'laundry',
            done: false
          }
        ]
      }
    ],
    curIndex: 0,
    selected: null, // $rect - 保存当前todo的位置信息；$todo - 保存当前todo对象
    unselect: null, // 当退出tododetail时保存selected对象
    editing: {
      on: false,
      text: ''
    },
  },
  getters: {
    curTodo(state) {
      return state.todos[state.curIndex]
    },
    todayTasks(state) {
      let arr = [];
      state.todos.forEach(todo => {
        arr.push(...todo.tasks.filter(task => {
          return task.date >= today && task.date < tomorrow && !task.done
        }));
      })
      return arr;
    }
  },
  mutations: {
    selectTodo(state, selected) {
      state.selected = selected;
    },
    unselectTodo(state) {
      state.unselect = state.selected;
      state.selected = null;
    },
    nextTodo(state) {
      if (state.curIndex < state.todos.length - 1) state.curIndex++
    },
    preTodo(state) {
      if (state.curIndex > 0) state.curIndex--
    },
    deleteTask(state, { todoIndex, taskId }) {
      let index = 0;
      state.todos[todoIndex].tasks.find((task, i) => {
        index = task.id === taskId ? i : index;
      });
      state.todos[todoIndex].tasks.splice(index, 1);
    },
    toggleEdit(state, closeEdit) {
      if (!state.editing.on) {
        state.editing.on = true;
        return
      }
      if (!closeEdit) {
        state.editing.on = false;
        return
      }
      if (state.editing.text) {
        state.todos[state.curIndex].tasks.unshift({
          id: state.addId++,
          date: new Date().getTime(),
          title: state.editing.text,
          done: false,
        });
        state.editing.on = false;
        state.editing.text = '';
        // window.localStorage.todoData = JSON.stringify(Object.assign({}, {
        //   addId: state.addId,
        //   todos: state.todos
        // }));
        return
      }
    }
  },
  actions: {

  }
})
