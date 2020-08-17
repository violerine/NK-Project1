<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="header">
                    <button type="button" class="circle close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-modal">
                        <h4>UNLOCK YOUR FREE TRAINING</h4>
                        <div class="form-group">
                            <input class="form-control" v-model="fullname" type="text" placeholder="Full Name">
                        </div>
                        <div class="form-group">
                            <input class="form-control" v-model="phone"  type="number" placeholder="Phone Number">
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail">
                        </div>
                        <p class="error-alert">{{errorMessage}}</p>
                        <button v-if="!loading" type="submit" v-on:click="sendEmail()" class="btn" :disabled="this.errorMessage !== ''">Submit</button>
                        <div v-if="loading" class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Form',
    data(){
        return {
            fullname:"",
            phone:"",
            email:"",
            errorMessage:"",
            loading:false,
        }
    },
    watch: {
        phone(value){
            const validPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
                if(!value.match(validPhone)){
                    this.errorMessage = "Please enter valid phone number e.g 08123456789"
                }else {
                    this.errorMessage = ""
                }
        },
        email(value){
            const validEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
            if(!value.match(validEmail)){
                this.errorMessage = "Please enter valid email e.g name@mail.com"
            }else {
                 this.errorMessage = ""
            }
        }
    },
    methods:{
        sendEmail(){
            this.loading = true;
            const completedField = this.email.length && this.fullname.length && this.phone
            if(this.errorMessage == "" && completedField){
                console.log("valid")
                window.Email.send({
                    Host : "smtp.gmail.com",
                    Username : "elbokusnadimailsender@gmail.com",
                    Password : "trinity#123",
                    To : 'gladysefirina@gmail.com',
                    From : "elbokusnadimailsender@gmail.com",
                    Subject : `From: ${this.fullname}`,
                    Body : `
                        Full name: ${this.fullname}
                        Phone: ${this.phone} 
                        Email: ${this.email} 
                    `
                    }).then(() => {    
                        this.loading = false
                        localStorage.setItem('user-usana', this.email)
                        window.location.reload()
                    });
             }
            console.log("ke click ga", this.fullname, this.phone, this.email)

        },
    }
}
</script>
<style src ="./FormModal.css" scoped></style>