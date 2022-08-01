<template>
    <section class="container">
        <Header />

        <!-- Display du header des listing -->
        <section v-if = "display == 'word'" class="list-header">
            <div class="header-item active-item">Words</div>
            <div @click="display = 'sentence'" class="header-item">Sentences</div>
        </section>

        <section v-if = "display == 'sentence'" class="list-header">
            <div @click="display = 'word'" class="header-item">Words</div>
            <div class="header-item active-item">Sentences</div>
        </section>

        <section v-if = 'display == "word"'>
            <WordsList  /> 
        </section>

        <section v-if = 'display == "sentence"'>
            <SentencesList />
        </section>
      
    </section>
    <div class="add-bottom"><span class="material-symbols-outlined">
add
</span></div>
</template>

<script>
//Liste des composants qui seront utilise
import Header from './Header.vue'
import WordsList from './WordsList.vue'
import SentencesList from './SentencesList.vue'


export default{
    name : 'WordsAndSentences',

    components : {
        Header,
        WordsList,
        SentencesList
    },

    data : function(){
        return{
            display : "word",
        }
    }

}
</script>

<style scoped>
.container{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: fixed;
    background-color: #201F21;
    height: 100%;
    width: 100%;
    left: 0;
    bottom: 0;
    overflow:scroll;
}

.list-header{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.header-item{
    text-align: center;
    padding: 10px;
    border-bottom: 3px solid gray;
    width: 50%;
    font-size: 1.2em;
    font-weight: bold;
    color: white;
    cursor: pointer;
}

.active-item{
    color: blueviolet;
    border-bottom: 3px solid blueviolet;

}
.add-bottom{
    position: fixed;
    width: 65px;
    height: 65px;
    background:linear-gradient(to bottom left, blueviolet 40%, white);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    top: 85%;
    left: 75%;
    cursor: pointer;
    box-shadow: 1px 2px 5px black;
}
</style>