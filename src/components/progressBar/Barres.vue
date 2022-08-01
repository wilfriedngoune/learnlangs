<template>
    
    <section class="big-section">
        <b data-test = "title">{{exerciseDone}} sur {{totalExercises}}</b>
        <br /><br />
        <div id = 'big-bar'>
            <div data-test = "small-bar" id = 'small-bar' :style="dynamicWidth"><b>{{exerciseDone}}</b></div>
            <b :style="marginLeft">{{totalExercises != exerciseDone ? totalExercises:''}}</b>
        </div>   
    </section>
</template>

<script>

export default{
    name : 'BarresU',
    props : ['exerciseDone', 'totalExercises'],

    computed : {
        dynamicWidth(){
            return{
                width : `${this.exerciseDone/this.totalExercises*100}%`
            }
        },

        marginLeft(){
            return{
                "margin-left" : `${(100 - (this.exerciseDone/this.totalExercises*100))/2}%`
            }
        }

     },
    
    mounted(){
        console.log("ExerciseDone", this.exerciseDone);
    }
}


</script>

// Style du composant
<style scoped>

#big-bar, #small-bar{
    border-radius: 15px;
    height: 35px;
    color: white;
    display: flex;
    align-items: center;
}

#big-bar{
 background-color: rgba(128, 128, 128, 0.247);
 color: black;
 display: flex;
}

#small-bar{
    background-color: blueviolet;
    justify-content: center;
}
.big-section{
    width: 100%;
    margin: auto;
}
</style>
