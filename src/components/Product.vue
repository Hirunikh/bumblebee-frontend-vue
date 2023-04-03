<template>
    <div class="form">
        <h2 style="text-align: center;">Product</h2>
        <b-form @create="onCreate" @update="onUpdate" @delete="onDelete" >
            <b-form-group class="margins" id="input-group-1" label="Product-Id:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.id" placeholder="Autogenerate ID" ></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-2" label="Product-Name:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.productname" placeholder="Enter Product Name" required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-3" label="Product-Description:" label-for="input-3">
                <b-form-input id="input-3" v-model="form.productdescription" placeholder="Enter Product Description" required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-4" label="Category-Id:" label-for="input-4">
                <b-form-input id="input-4" v-model="form.categoryId" placeholder="Enter Category Id"  required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-5" label="Brand-Id:" label-for="input-5">
                <b-form-input id="input-5" v-model="form.brandId"  placeholder="Enter Brand Id"  required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-6" label="Price:" label-for="input-6">
                <b-form-input id="input-6" v-model="form.price" placeholder="Enter Product Price" required></b-form-input>
            </b-form-group>
            <b-form-group class="margins" id="input-group-7" label="Quantity:" label-for="input-7">
                <b-form-input id="input-7" v-model="form.quantity" placeholder="Enter Product Quantity" required></b-form-input>
            </b-form-group>
            <div class="buttonsAtBottom">
                <b-button class="padding" type="create" variant="primary">Create</b-button>
                <b-button class="padding" type="update" variant="secondary">Update</b-button>
                <b-button class="padding" type="delete" variant="danger">Delete</b-button>
            </div>

        </b-form>
        <div>
            <h5 style="text-align: center;">Product Details</h5>   
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
                productname: '',
                productdescription: '',
                categoryId: '',
                brandId: '',
                price: '',
                quantity: ''
            },
            items: [
          { productId: '', productName: '', productDescription:'', categoryId: '', brandId: '', price: '', quantity: '' }
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