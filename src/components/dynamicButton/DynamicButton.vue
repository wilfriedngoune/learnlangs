<template>
    <section class="container">
        <section class="button" @click="handleClick()" >
            <section class="display-flex" v-if="submit" id = "submit">
                <span class="material-symbols-outlined" style="color:#7A2BCF">arrow_downward</span>
                <span class="text">Submit</span>
            </section> 

            <section class="display-flex" v-if="confetti">
                <ConfettiAnim />
            </section>

             <section class="display-flex" v-if="jumpingDot">
                <JumpingDots />
            </section>

            <section class="display-flex" v-if="success">
                <span class="material-symbols-outlined" style="color:green" id="done">done</span>
                <span class="text" id="sucess">Sucess</span>
            </section>      
        </section>
    </section>
</template>


<script>
import JumpingDots from './JumpingDots.vue'
import ConfettiAnim from './ConfettiAnim.vue'

export default{
  components: { JumpingDots, ConfettiAnim },

    name : 'DynamicButton',

    data(){

        return{
            jumpingDot: false,
            fly : false,
            success : false,
            submit : true,
            confetti: false
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
        
        handleClick(){
            document.getElementById('submit').style.top = '15px'
            document.getElementById('submit').style.opacity = '5%'
            setTimeout(() => {
                this.submit = false
                this.jumpingDot = true
                setTimeout(() => {
                    this.jumpingDot = false
                    this.confetti = true
                }, 2000)
            }, 80)
            

            setTimeout(() => {
                this.submit = false
                this.jumpingDot = false
                this.success = true
            }, 2200)
        }
    }
}


</script>


<style scoped>
.container{
    margin: auto;
    width: 30%;
}

body{
    background-color: #050c1b;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.button{
    padding: 10px;
    background-color: #1d2432;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 50%;
}

.text{
    color: white;
    margin-left: 10px;
    font-weight: bold;
}

.display-flex{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

/* Style et animation */

#submit{
    transition: top 1s ease-in, opacity 0.05s ease-in;
}

#done{
    position: relative;
    animation: come-left 0.3s ease-in;
}


#sucess{
    position: relative;
    animation: come-right 0.3s ease-in;
}


@keyframes come-left{
    from{
        left: -20px
    }
    to{
        left: 0px;
    }
}

@keyframes come-right{
    from{
        right: -20px
    }
    to{
        right: 0px;
    }
}


</style>