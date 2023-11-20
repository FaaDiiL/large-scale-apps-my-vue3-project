import { createStore } from 'vuex'
import { ItemInterface } from '@/models/items/Item.interface'
import { ItemsStateInterface } from '@/models/store/itemState.interface'

// our initial state:
const state: ItemsStateInterface = {
  loading: false,
  items: []
}
export default createStore({
  state: state,
  getters: {
  },
  mutations: {
    loadingItems(state: ItemsStateInterface) {
      state.loading = true
      state.items = []
    },
    loadedItems(state: ItemsStateInterface, items: ItemInterface[]) {
      state.items = items
      state.loading = false
    },
    selectItem(state: ItemsStateInterface, params: {
      id: number,
      selected: boolean
    }) {
      const { id, selected } = params
      const item = state.items.find(o => o.id === id )
      if(item){
        item.selected = selected
      }
    }
  },
  actions: {
    loadItems({ commit, state }) {
      commit('loadingItems')

      // mock some data
      const mockItems: ItemInterface[] = [{ 
        id: 1,
        name: 'Item 1',
        selected: false,
      },
      {
        id: 2,
        name: 'Item 2',
        selected: false,
      },
      {
        id: 3,
        name: 'Item 3',
        selected: false,
      }]

      // let's pretend we called some API end-point
      // and it takes 1 second to return the data
      // by using javascript setTimeout with 1000 for
      // the milliseconds option
      setTimeout(() => {
        commit('loadedItems', mockItems)  
      }, 1000)
    },
    selectItem({ commit }, params: {
      id: number
      selected: boolean
    }) {
      commit('selectItem', params)
    }
  },
  modules: {
  }
})
