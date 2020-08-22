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
    created(){
        this.errorMessage = ""
    },
    watch: {
        phone(value){
            if(value.length < 6){
                this.errorMessage = "Please enter valid phone number e.g 08123456789"
            }else {
                this.errorMessage = ""
            }
        },
        email(value){
            if(!value.includes('@')){
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
                window.Email.send({
                    SecureToken:"6f5bf539-37fe-42e5-9a60-27a72bc0ee69",
                    To : 'k.nelvin@hotmail.com', 
                    From : "elbokusnadimailsender@gmail.com",
                    Subject : `From: ${this.fullname}`,
                    Body : `
                        Full name: ${this.fullname}
                        Phone: ${this.phone} 
                        Email: ${this.email} 
                    `
                    }).then((val) => {    
                        this.loading = false
                        if(val !== "OK"){
                            alert("Mohon maaf terjadi kesalahan pada server kami")
                        }else {
                            localStorage.setItem('user-usana', this.email)
                            window.location.reload()
                            window.scrollTo(0,350);
                        }

                    })
             }

        },
    }
}
</script>
<style src ="./FormModal.css" scoped></style>