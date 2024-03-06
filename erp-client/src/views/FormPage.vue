<template>
    <div class="container">
        <div class="form-container">
            <div>
                <h1 style="font-weight: 700;">Form</h1>
            </div>
            <div class="form-container01">
                <form @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="department">Department*</label>
                        <select id="gender" v-model="department1" required>
                            <option value="FB">FB</option>
                            <option value="Reception">Reception</option>
                            <option value="Kitchen">Kitchen</option>
                            <option value="Maintenance">Maintenance</option>
                            <option value="HR">HR</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="role">Role*</label>
                        <input type="text" id="role" v-model="role" required>
                    </div>
                    <div class="form-group">
                        <label for="firstname">Firstname*</label>
                        <input type="text" id="firstname" v-model="firstname" required>
                    </div>
                    <div class="form-group">
                        <label for="lastname">Lastname*</label>
                        <input type="text" id="lastname" v-model="lastname" required>
                    </div>
                    <div class="form-group">
                        <label for="shortname">Nickname*</label>
                        <input type="text" id="nickname" v-model="nickname" required>
                    </div>
                    <div class="form-group">
                        <label for="age">Age*</label>
                        <input type="number" id="age" v-model="age" required>
                    </div>
                    <div class="form-group">
                        <label for="gender">Gender*</label>
                        <select id="gender" v-model="gender" required>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="nationality">Nationality*</label>
                        <input type="text" id="nationality" v-model="nationality" required>
                    </div>
                    <div class="form-group">
                        <label for="birthday">Birth Day*</label>
                        <input type="date" id="birthday" v-model="birthday" required>
                    </div>
                    <div class="form-group">
                        <label for="education">Education*</label>
                        <input type="text" id="education" v-model="education" required>
                        <label style="margin-top: 2%;" for="education1">Education(Optional)</label>
                        <input style="margin-top: 2%;" type="text" id="education2" v-model="education2" required>
                        <label style="margin-top: 2%;" for="education2">Education(Optional)</label>
                        <input style="margin-top: 2%;" type="text" id="education3" v-model="education3" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email*</label>
                        <input type="email" id="email" v-model="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone number*</label>
                        <input type="tel" id="phone" v-model="phone" required><br>
                        <span v-if="phone && phone.length !== 10" style="color: red;">Please enter 10 digits.</span>
                    </div>
                    <div class="form-group">
                        <label for="resume">Resume*</label>
                        <input type="file" id="resume" @change="handleResumeUpload" required>
                    </div>
                    <div class="form-group">
                        <label for="more">More about me</label>
                        <textarea id="more" v-model="moreAboutMe"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {

    data() {
        return {
            department: '',
            department1: '',
            role: '',
            firstname: '',
            lastname: '',
            nickname: '',
            nationality: '',
            age: null,
            gender: '',
            birthday: '',
            education: '',
            education2: '',
            education3: '',
            email: '',
            phone: '',
            resume: null,
            moreAboutMe: ''
        };
    },
    methods: {
        handleFileUpload(event) {
            this.resume = event.target.files[0];
        },
        async handleResumeUpload(event) {
            this.resume = event.target.files[0];
            // Display upload progress or loading spinner if needed
        },
        async submitForm() {
            try {
              
                const formData = new FormData();
                formData.append('file', this.resume);
                const filename = `${this.firstname}_${this.lastname}_${Date.now()}`;

               axios.put('https://71pv22u6vl.execute-api.ap-southeast-2.amazonaws.com/s3-test/test-s3-20392/' + filename, this.resume,{
                    header: {
                        'Access-Control-Allow-Origin': "*"
                    }
               }).then(response => {
                console.log(response);
               })
                
                console.log('Form submitted successfully!');
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        },

    }
};
</script>

<style>
label {
    font-weight: 700;
    margin-right: 5%;
}

body {
    background-color: #263540;
}

.container {
    border-radius: 20px;
    background-color: #fff;
}

.form-container {
    margin: 2% auto;
    padding: 2%;
}

.form-container01 {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    margin: 2% auto;
    padding: 2%;
    align-items: center;
}

.form-group {
    margin-bottom: 20px;
}

input[type="text"],
input[type="number"],
select,
textarea,
button,
input[type="file"] {
    width: 90%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

button {
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-bottom: 10%;
}

button:hover {
    background-color: #0056b3;
}

@media (max-width: 768px) {
    .form-container {
        padding: 20px 20px;
    }
}
</style>
