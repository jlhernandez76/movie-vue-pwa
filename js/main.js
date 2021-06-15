const app = Vue.createApp({
data() {
    return{
        title: "Movies Vue Api",
        movieTitle: "Spider Man",
        movieData: {},
    }
},
mounted(){
    this.getMovie();
},
methods:{
    async getMovie(){
        //const search = this.movieTitle
        
        const search = this.movieTitle.toLowerCase().replace(/ /g,"+");
        
        const data = await fetch(`http://www.omdbapi.com/?apikey=c8d831e0&t=${search}`);

        const jsonData = await data.json();

        this.movieData=jsonData;
    },
}


});
