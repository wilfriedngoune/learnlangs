<template>
    <section class="container">
        <br />
        <div class="logo">alaahza</div>

        <br /><br />
        <section class="field-container">
            <section class="field-container-header">
                <div class="text">Mot</div>
                <section :style="tooglePosition" class="toogle">
                    <div @click="updateToogle()" class="toogle-activator"></div>
                </section>
                <div class="text">Phrase</div>
            </section>

            <!-- Disposition des champs -->
            <br /><br />
            <section class="field-sub-container">
                <!-- Les 3 champs -->
                <form action="">
                    <input type="text" placeholder="Expression">
                    <input type="text" v-if = "justifyContent == 'left'" placeholder="Nature">
                    <input type="text" placeholder="Traduction">
                </form>


                <!-- Les endroit des audios -->
                <br /><br />
                <section class="audio-container">
                    <div class="audio"><span class="material-symbols-outlined" style="color:white">mic</span></div>
                    <div class="text">Slow</div>
                </section>
                <br /> 

                <section class="audio-container">
                    <div class="audio"><span class="material-symbols-outlined" style="color:white">mic</span></div>
                    <div class="text">Normal</div>
                </section>

                <br /><br />
                <div class="submit">Submit</div>
            </section>

            <br />
        </section>

        <br /><br />
    </section>
</template>


<script>

export default{

    name : 'AddWord',

    data(){

        return{
            justifyContent : 'left'
        }

    },
        
    //Style pour dynamiser le toogle
    computed : {

        tooglePosition(){
            return{
                "justify-content" : this.justifyContent,
            }
        }
    },

    //Methodes necessaire
    methods : {
        
        updateToogle(){
            this.justifyContent == 'left' ? this.justifyContent = 'right' : this.justifyContent = 'left'
        }
    }
}


</script>


<style scoped>
.container{
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #050c1b;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow: scroll;
}

.logo{
    text-align: center;
    font-size: 1.8em;
    color: white;
    font-weight: bold;
}

.field-container{
    background-color: #1d2432;
    padding: 10px;
    width: 50%;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.text{
    color: white;
    font-size: 1.2em;
}

.field-container-header{
    display: flex;
    justify-content: center;
    align-items: center;
}



.toogle{
    height: 30px;
    background-color: #050c1b;
    width: 60px;
    border-radius: 20px;
    border: 1px solid #7A2BCF;
    margin: 0px 10% 0px 10%;
    display: flex;
}

.toogle-activator{
    height: 30px;
    width: 30px;
    border-radius: 20px;
    background-color: #7A2BCF;
}

.field-sub-container{
    margin: auto;
    width: 80%;
}

input{
    border: none;
    border-radius: 0;
    background-color: #1d2432;
    font-family: inherit;
    font-size: 1.1em;
    padding: 5px;
    width: 100%;
    color: white;
    margin-bottom: 15px;
    border-bottom: 2.5px solid #7A2BCF;
    font-size: 1.2em;
}

.audio-container{
    background-color: #050c1b;
    height: 50px;
    border-radius: 40px;
    display: flex;
    align-items: center;
}

.audio{
    height: 50px;
    width: 50px;
    border-radius: 40px;
    border: 1px solid #7A2BCF;
    background-color: #7A2BCF;
    margin-right: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.submit{
    padding: 15px;
    background-color: #7A2BCF;
    color: white;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: bold;
}

/* Style pour mobile */

@media screen and (max-width: 768px){
    .field-container{
        width: 87%;
    }

    .field-sub-container{
        width: 93%;
    }

    .text{
        font-size: 1em;
    }

    .submit{
        padding: 10px;
        font-size: 1em;

    }

    input{
        font-size: 1em;
    }

    .audio{
        margin-right: 27%;
    }
}
</style>