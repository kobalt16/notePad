const App = {
    data() {
        return {
            title: 'NOTEpad',
            inputValue: '',
            notes: ['note1', 'note2']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            this.notes.push(this.inputValue)
        }
    }
}

Vue.createApp(App).mount('#app')