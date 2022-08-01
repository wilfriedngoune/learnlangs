<template>
    <section>
        <br />
        <UniqueItem p1 = 'Hello -!' p2 = 'rejected' p3 = '13/03/2022' />
        <UniqueItem p1 = 'Hey guy' p2 = 'pending' p3 = '11/03/2022' />
        <UniqueItem p1 = 'Good morning' p2 = 'approved' p3 = '13/02/2022' />
    </section>
</template>


<script>

//IMport des composants
import UniqueItem from './UniqueItem.vue'

export default{
    name: 'SentencesList',

    props : ['display'],

    components : {
        UniqueItem,
    }

}
</script>

