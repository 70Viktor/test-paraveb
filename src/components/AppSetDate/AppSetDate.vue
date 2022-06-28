<template>
    <div class="date__wrap">
        <div class="date__wrap--item">
            <label for="from">От</label>
            <input id="from" required="required" class="date__input" type="date" @input="selectDate" v-model="dateFrom">
        </div>
        <span>-</span>
        <div class="date__wrap--item">
            <label for="to">До</label>
            <input id="to" required="required" class="date__input" type="date" @input="selectDate" v-model="dateTo">
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
        name: "AppSetDate",
        data () {
            return {
                dateFrom: '',
                dateTo: ''
            }
        },
        methods: {
            ...mapMutations(['SET_DATE_FROM', 'SET_DATE_TO']),
            selectDate() {
                if ( new Date (this.dateFrom) > new Date (this.dateTo) ) {
                    [this.dateFrom, this.dateTo] = [this.dateTo, this.dateFrom]
                }

                // this.dateFrom === '' ? this.SET_DATE_FROM(0) :
                    this.SET_DATE_FROM(this.dateFrom)
                // this.dateTo === '' ? this.SET_DATE_TO() :
                    this.SET_DATE_TO(this.dateTo)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>