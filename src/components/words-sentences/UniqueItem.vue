<template>
    <section class="container">
        <div>{{p1}}</div>

        <!-- Affichage de P2 en fonction des valeurs de couleur -->
        <div v-if = "p2 == 'approved'" style="color:green">.{{p2}}</div>
        <div v-if = "p2 == 'rejected'" style="color:red">.{{p2}}</div>
        <div v-if = "p2 == 'pending'" style="color:orange">.{{p2}}</div>

        <div>{{p3}}</div>
    </section>
</template>

<script>

export default{
    name : 'UniqueItem',
    props : ['p1', 'p2', 'p3']

}


</script>


<style scoped>
    .container{
        display: flex;
        justify-content: space-between;
        background-color: #4C4B4E;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        color: white;
    }
</style>