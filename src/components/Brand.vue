<template>
    <div class="form">
        <h2 style="text-align: center;">Brand</h2>
        <b-form>
            <b-form-group class="margins" id="input-group-1" label="Brand ID:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.id" placeholder="Autogenerate ID" ></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-2" label="Brand Name:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.brandname" placeholder="Enter Brand Name" required></b-form-input>
            </b-form-group>

            <div class="buttonsAtBottom">
                <b-button class="padding" type="button" v-on:click="onCreate" variant="primary">Create</b-button>
                <b-button class="padding" type="button" v-on:click="onUpdate" variant="success">Update</b-button>
                <b-button class="padding" type="reset" v-on:click="$router.push('/brands')" variant="secondary">Clear</b-button>
            </div>

        </b-form>
        <div>
            <h5 style="text-align: center;">Brand Details</h5>
            <b-table class="margins" hover :items="items" :fields="fields" :striped="striped" :bordered="bordered" :outlined="outlined">
                <template  v-slot:cell(select)="{ item }">
                    <span><b-btn  @click="selectItem(item)" variant="outline-primary" >Select</b-btn></span>
                </template>
                <template v-slot:cell(delete)="{ item }">
                    <span><b-btn variant="outline-success" @click="deleteItem(item)"  >Delete</b-btn></span>
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
                brandname: ''
            },
            items: [],
        fields: ["brandId", "brandName", "select", "delete"],    
        striped: true,
        bordered: true,
        outlined: true
        }
    },
    mounted() {
        this.loadBrands();
    },
    methods: {
        async loadBrands() {
            let response  = await axios.get("/bumblebee-apis/api/V1/Brand")
            let allbrands = response.data;
            let allItems = [];
            allbrands.forEach(brand => {
                allItems.push({
                    brandId: brand.brandID,
                    brandName: brand.brandName
                })
            })
            this.items = allItems;
        },
        async deleteItem(item) {
            await axios.delete(`/bumblebee-apis/api/V1/Brand/${item.brandId}`)
                .then(response => {
                    console.log(response);
                    this.loadBrands();
                });
        },
        selectItem(item) {
            this.form.brandname = item.brandName;
            this.form.id = item.brandId;
        },
        async onCreate() {
            await axios.post('/bumblebee-apis/api/V1/Brand', {
                brandName: this.form.brandname
            })
            .then(response => {
                console.log(response);
                this.loadBrands();
            })
        },
        async onUpdate() {
            await axios.put(`/bumblebee-apis/api/V1/Brand/${this.form.id}`, {}, {
                params: {
                    brandName: this.form.brandname
                }
            })
                .then((response) => {
                    console.log(response);
                    this.loadBrands();
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
    border-radius: 10px;
    background-color: white;
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