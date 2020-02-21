new Vue({
    el: '#app',
    data: {
        data: []
    },
    methods: {
        getAll
    },
    mounted() {
        this.getAll()
    }
})

function getAll() {
    axios.get('/api/renter')
    .then(x => this.data = x.data)
    .catch(err => console.log(err))
}