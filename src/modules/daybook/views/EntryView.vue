<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">15</span>
        <span class="mx-1 fs-3">Julio</span>
        <span class="mx-2 fs-4 fw-light">2021, jueves</span>
    </div>

    <div>
        <button class="btn btn-danger mx-2">
            Borrar
            <i class="fa fa-trash-alt"></i>
        </button>
        
        <button class="btn btn-primary">
            Subir foto
            <i class="fa fa-upload"></i>
        </button>
    </div>
  </div>

    <hr>
    <div class="d-flex flex-column px-3 h-75">
           <textarea
            v-model="entry.text"
            placeholder="¿Que sucedio hoy?"
        ></textarea>
    </div>
    
    <Fab 
        icon="fa-save"
    />
    <img    src="https://es.web.img3.acsta.net/pictures/15/05/06/16/13/020977.jpg" 
            alt="entry-picture"
            class="img-thumbnail"
            />

</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex';
import getDayMonthYear from '../helpers/getDayMonthYear';


export default {
    props: {
        id:{
            tpye:String,
            required: true
        }
    },
    components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue"))
    },

    data(){

        return {
            entry:null
        }     
    },

    computed:{
        ...mapGetters('journal', ['getEntryById']),
        day() {
            const { day } = getDayMonthYear( this.entry.date )
            return day
        },
        month() {
            const { month } = getDayMonthYear( this.entry.date )
            return month
        },
        yearDay() {
            const { yearDay } = getDayMonthYear( this.entry.date )
            return yearDay
        } 
    },    
    
    methods: {
        loadEntry() {
            const entry = this.getEntryById( this.id )
            if( !entry ) return this.$router.push({ name: 'no-entry' })

            this.entry = entry
        }
    },

    created() {
        this.loadEntry()
    }


}
</script>

<style lang="scss" scoped>
    textarea {
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus {
            outline: none;
        }
    }

    img {
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #0000, $alpha:0.2);
    }
</style>