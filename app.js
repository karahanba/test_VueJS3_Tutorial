//console.log('hello, vue')
const app = Vue.createApp({
    //data, functions
    //template: '<h2>I am the template</h2>'
    data(){
        return{
            url: 'http://www.google.com',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'pathrick rothfuss',img: 'assets/1.jpg', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson',img: 'assets/2.jpg', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson',img: 'assets/3.jpg', isFav: true }
            ],
            /*title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,*/
            x: 0,
            y: 0
        }
    },
    methods:{
        changeTitle(title){
            //console.log('you clicked me')
            //this.title= 'Words of Radiance'
            this.title = title

        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY

        }

    }
})

app.mount('#app')