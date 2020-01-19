<template>
    <div class="d-flex breadcrumb p-0">
        <p>{{item1}}</p>
        <p v-if="item2">&nbsp- {{item2}}</p>
        <span v-if="item3" class="d-flex">
            <p class="short">&nbsp- {{item3}}</p>
            <template v-if="item3.length>=30">
                ...
            </template>
        </span>
    </div>
</template>
<script>
    export default{
        props:["item1", "item2", "item3"],
    }
</script>
