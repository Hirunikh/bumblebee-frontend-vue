<template>
    <div class="form">
        <h2 style="text-align: center;">Category</h2>
        <b-form>
            <b-form-group class="margins" id="input-group-1" label="Category ID:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.id" placeholder="Autogenerate ID"></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-2" label="Category Name:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.categoryname" placeholder="Enter Category Name"
                    required></b-form-input>
            </b-form-group>

            <div class="buttonsAtBottom">
                <b-button class="padding" type="button" v-on:click="onCreate" variant="primary">Create</b-button>
                <b-button class="padding" type="button" v-on:click="onUpdate" variant="success">Update</b-button>
                <b-button class="padding" type="reset" v-on:click="$router.push('/categories')" variant="secondary">Clear</b-button>

            </div>

        </b-form>
        <div>
            <h5 style="text-align: center;">Category Details</h5>
            <b-table class="margins" hover :items="items" :fields="fields" :striped="striped" :bordered="bordered"
                :outlined="outlined">
                <template v-slot:cell(select)="{ item }">
                    <span><b-btn @click="selectItem(item)" variant="outline-primary">Select</b-btn></span>
                </template>
                <template v-slot:cell(delete)="{ item }">
                    <span><b-btn variant="outline-danger" @click="deleteItem(item)">Delete</b-btn></span>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            form: {
                id: '',
                categoryname: ''
            },
            items: [
            ],
            fields: ["categoryId", "categoryName", "select", "delete"],
            striped: true,
            bordered: true,
            outlined: true
        }
    },
    mounted() {
        this.loadCategories();
    },
    methods: {
        async loadCategories() {
            let response = await axios.get("/bumblebee-apis/api/V1/Category")
            let allCategories = response.data;
            let allItems = [];
            allCategories.forEach(category => {
                allItems.push({
                    categoryId: category.categoryID,
                    categoryName: category.categoryName
                })
            })
            this.items = allItems;
        },

        async deleteItem(item) {
            await axios.delete(`/bumblebee-apis/api/V1/Category/${item.categoryId}`)
                .then(response => {
                    console.log(response);
                    this.loadCategories();
                });
        },
        selectItem(item) {
            this.form.categoryname = item.categoryName;
            this.form.id = item.categoryId;
        },
        async onCreate() {
            await axios.post('/bumblebee-apis/api/V1/Category', {
                categoryName: this.form.categoryname
            })
                .then(response => {
                    console.log(response);
                    this.loadCategories();
                })
        },
        async onUpdate() {
            await axios.put(`/bumblebee-apis/api/V1/Category/${this.form.id}`, {}, {
                params: {
                    categoryName: this.form.categoryname
                }
            })
                .then((response) => {
                    console.log(response);
                    this.loadCategories();
                });
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
    background-color: white;
    border-radius: 10px;
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