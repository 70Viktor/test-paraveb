<template>
    <div class="select__wrap">
        <div class="select__selected" @click="openSelect = !openSelect">
            <img src="@/assets/icon-author.svg" class="select__selected_icon" @click.stop="SELECT_AUTHOR('')">
            <div class="select__selected_placeholder">{{ selectedAUTHOR ? selectedAUTHOR : 'Выбор автора' }}</div>
            <img src="@/assets/icon-arrow.svg" alt="" class="select__selected_arrow" :class="{'_active': openSelect}">
        </div>
        <div class="select__items" v-show="openSelect">
            <ol class="select__items_wrap">
                <li class="select__item" v-for="author in filteredAUTHORS" @click="selectAUTHOR(author)">
                    {{ author }}
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    export default {
        name: "AppSelect",
        props: {
            AUTHORS: Array
        },
        data() {
            return {
              openSelect: false
            }
        },
        computed: {
            ...mapState(['selectedAUTHOR']),
            filteredAUTHORS() {
                return this.AUTHORS.filter(author => author !== null)
            }
        },
        methods: {
            ...mapMutations(['SELECT_AUTHOR']),
            selectAUTHOR(author) {
                this.SELECT_AUTHOR(author)
                this.openSelect = false
            }
        }
    }
</script>

<style lang="scss">
    @use "style";
</style>