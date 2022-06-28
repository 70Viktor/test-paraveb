import { createStore } from 'vuex'

export default createStore({
  state: {
    ARTICLES: [],
    AUTHORS: [],
    selectedAUTHOR: '',
    DATE_FROM: '',
    DATE_TO: ''
  },
  getters: {
  },
  mutations: {
    ADD_AUTHOR (state, author) {
      if (!state.AUTHORS.includes(author) && author !== null) {
          state.AUTHORS.push(author)
      }
    },
    ADD_ARTICLE (state, article) {
      state.ARTICLES.push(article)
    },
    SELECT_AUTHOR(state, author) {
        state.selectedAUTHOR = author
    },
    SET_DATE_FROM(state, dateStr) {
    state.DATE_FROM = dateStr
    },
    SET_DATE_TO(state, dateStr) {
      state.DATE_TO = dateStr
    }
  },
  actions: {
    fetchCards({ commit }) {
      fetch('https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc')
          .then(res => res.json())
          .then(res => res.articles.forEach(article => {
            console.dir(article)
            commit('ADD_AUTHOR', article.author)
            let AppArticle = {}
            AppArticle.title = article.title
            AppArticle.description = article.description
            AppArticle.publishedAt = article.publishedAt
            AppArticle.author = article.author

            commit('ADD_ARTICLE', AppArticle)
          }))
    }
  }
})
