<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser'

emailjs.init('FI8VMfTEIQYxTdpiJ')
const email = ref('')
const name = ref('')
const message = ref('')
const services = ref({
    web: false,
    research: false,
    contentCreation: false,
    ux: false,
    strategy: false,
    other: false
})

const sendEmail = () => {
    const formData = {
        email: email.value,
        name: name.value,
        message: message.value,
        services: Object.keys(services.value).filter(service => services.value[service]).join(', ')
    };
    const params = {
        from_email:formData.email,
        name: formData.name,
        message:formData.message,
        services: formData.services
    };

    emailjs.send('service_73xpc7k', 'template_5qkoxyh', params)
}

</script>

<template>
    <section>
        <div class="text-center">
            <h1 class="text-2xl md:text-4xl font-bold mb-3">contact Our Team</h1>
            <p>Got any questions about the product or scaling on our platform?We're here to help.</p>
            <p>Chat to our friendly team 24/7 and get onboard in less than 5min</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-60/40 content maincl">
            <main class="max-w-lg mb-3">
                <form @submit.prevent="sendEmail">
                    <div class="name">
                        <label for="name" class="text-sm font-semibold">Name</label>
                        <input type="text" v-model="name" name="name" id="name" class="block w-full rounded-md border border-gray-400 p-2" placeholder="Enter your name">
                    </div>
                    <div class="email">
                        <label for="email" class="text-sm font-semibold">Email</label>
                        <input type="email" v-model="email" name="email" id="email" class="block w-full rounded-md border border-gray-400 p-2" placeholder="company@gmail.com">
                    </div>
                    
                    <div class="message">
                        <label for="message" class="text-sm font-semibold">Message</label>
                        <textarea name="message" v-model="message" id="message" cols="30" rows="3" class="w-full rounded-md border border-gray-400 p-2" placeholder="Leave us a message"></textarea>
                    </div>
                    <div class="services">
                        <h2 class="font-bold text-md mb-3">Services</h2>
                        <div class="grid grid-cols-1 mb-4 md:grid-cols-2">
                            <div class="left">
                                <div class="mb-2">
                                    <input type="checkbox" v-model="services.web" name="web" id="web">
                                    <label for="web" class="ml-2 font-semibold">Web Design</label>
                                </div>
                                <div class="mb-2">
                                    <input type="checkbox" v-model="services.ux" name="ux" id="ux">
                                    <label for="ux" class="ml-2 font-semibold">UX Design</label>
                                </div>
                                <div class="mb-2">
                                    <input type="checkbox" v-model="services.research" name="research" id="research">
                                    <label for="research" class="ml-2 font-semibold">User research</label>
                                </div>
                            </div>
                            <div class="right">
                                <div class="mb-2">
                                    <input type="checkbox" v-model="services.contentCreation" name="content-creation" id="content-creation">
                                    <label for="content-creation" class="ml-2 font-semibold">Content creation</label>
                                </div>
                                <div class="mb-2">
                                    <input type="checkbox" v-model="services.strategy" name="strategy" id="strategy">
                                    <label for="strategy" class="ml-2 font-semibold">Strategy and consulting</label>
                                </div>
                                <div class="mb-2">
                                    <input type="checkbox" v-model="services.other" name="other" id="other">
                                    <label for="other" class="ml-2 font-semibold">Other</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <button class="w-full bg-black text-white rounded-md p-3">Send message</button>
                </form>
            </main>
            <aside>
                <h2 class="mb-2 font-bold text-md">Chat with us</h2>
                <p class="mb-2 text-gray-500 text-sm font-semibold">Speak to your friendly team via live chat</p>
                <div>
                    <div class="mb-2 space-x-3">
                        <i class="pi pi-whatsapp"></i>
                        <a class="underline underline-offset-2" href="https://www.skype.com/en/features/skype-web/" target="blank">start a live chat</a>
                    </div>
                    <div class="mb-2 space-x-3">
                        <i class="pi pi-telegram"></i>
                        <a class="underline underline-offset-2" href="https://support.google.com/mail/answer/8494?hl=en&co=GENIE.Platform%3DDesktop" target="blank">shoot us an email</a>
                    </div>
                    <div class="mb-2 space-x-3">
                        <i class="pi pi-twitter"></i>
                        <a class="underline underline-offset-2" href="https://x.com/" target="blank">Message us on X</a>
                    </div> 
                </div>
                <div>
                    <h2 class="mb-2 font-bold text-md">Call us</h2>
                    <p class="mb-2 text-gray-500 text-sm font-semibold">Call our team Mon-Fri from 8am to 5pm</p>
                    <div class="mb-2 space-x-3">
                        <i class="pi pi-phone"></i>
                        <a class="underline underline-offset-2" href="#">+254703672667</a>
                    </div>
                </div>
                <div>
                    <h2 class="mb-2 font-bold text-md">Visit us</h2>
                    <p class="mb-2 text-gray-500 text-sm font-semibold">Chat us in person at our Nakuru HeadQuater</p>
                    <div class="mb-2 space-x-3">
                        <i class="pi pi-map-marker"></i>
                        <a class="underline underline-offset-auto" href="#">100 Nakuru county, Pipeline Kaka james</a>
                    </div>
                </div>
            </aside>

        </div>
       
    </section>
    
</template>
<style scoped>
.content{
    margin-top: 3rem;
}
.maincl{
    margin: 6rem;
}
</style>