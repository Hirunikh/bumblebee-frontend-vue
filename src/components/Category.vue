<template>
    <div class="form">
        <h2 style="text-align: center;">Category</h2>
        <b-form @create="onCreate" @update="onUpdate" @delete="onDelete" >
            <b-form-group class="margins" id="input-group-1" label="Category-Id:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.id" placeholder="Autogenerate ID" ></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-2" label="Category-Name:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.categoryname" placeholder="Enter Category Name" required></b-form-input>
            </b-form-group>

            <div class="buttonsAtBottom">
                <b-button class="padding" type="create" variant="primary">Create</b-button>
                <b-button class="padding" type="update" variant="secondary">Update</b-button>
                <b-button class="padding" type="delete" variant="danger">Delete</b-button>
            </div>

        </b-form>
        <div>
            <h5 style="text-align: center;">Category Details</h5>   
    <b-table class="margins" hover :items="items" :striped="striped" :bordered="bordered" :outlined="outlined"></b-table>
  </div>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            value: "",
            form: {
                id: '',
                categoryname: ''
            },
            items: [
          { categoryId: '', categoryname: '' }
        ],
        striped: true,
        bordered: true,
        outlined: true
        }
    },
    methods: {
        onCreate() {

        },
        onUpdate() {

        },
        onDelete(){
            
        }

    }   

    }

</script>

<style lang="css" scoped>
.form {
    margin: auto;
    width: 50%;
    border: 2px solid grey;
    padding: 10px;
}

.buttonsAtBottom {
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: center;

}

.margins {
    margin: 5px 0px 5px 0px;
}

.padding {
    margin: 1rem;
}
</style>