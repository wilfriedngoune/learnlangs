<template>
    <div>{{time}} et {{direction}}</div>
    <section class="container">
        <div data-test = "time">{{minute < 10 ? "0" : ""}}{{minute}}:{{second < 10 ? "0" : ""}}{{second}}</div>
    </section>
</template>



<script>

    export default{
        //Nom du composant
        name : "TimeTracker",

        //Nom et valeur des proprietes
        props : ['time', 'direction'],

        data : function() {
            return{
                minute : Math.floor(this.time / 60),
                second : this.time % 60,
                myCounter : 0
            }
        },

        methods : {
            //FOnction qui met a jour le temps (les secondes et les minutes)
            updateTime(){

                //Verification des limites
                if((this.minute == 0 && this.second == 0) &&  this.direction != "up"){
                    clearInterval(this.myCounter)
                    this.second ++                    
                    
                }

                if(this.minute == Math.floor(this.time / 60) && this.second == this.time % 60 && this.direction == "up"){
                    clearInterval(this.myCounter)
                    this.second --
                }

                if(this.second == 59 && this.direction == "up"){
                    this.minute++
                    this.second = -1
                }

                if(this.second == 0 && this.direction != "up"){
                    this.minute--
                    this.second = 60
                }

                //Avancement des secondes
                this.direction == "up" ? this.second ++ : this.second --
            }
        },

        //Des que le composant est monte
        mounted(){
            //Initialisation des minute et secondes
            if(this.direction == "up"){
                this.minute = this.second = 0 
            }

            this.myCounter = setInterval(this.updateTime, 1000)
        }
    }
</script>


<style scoped>

.container{
    background-color: rgba(0, 0, 0, 0.445);
    color: white;
    padding: auto;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
}

</style>