<template>
    <div class="container">
        <div class="form-container">
            <div>
                <h1 style="font-weight: 700;">Form</h1>
            </div>
            <div class="form-container01">
                <form>
                    <div class="form-group">
                        <label for="department">Department*</label>
                        <select id="gender" v-model="department_select">
                            <option value="FB">FB</option>
                            <option value="Reception">Reception</option>
                            <option value="Kitchen">Kitchen</option>
                            <option value="Maintenance">Maintenance</option>
                            <option value="HR">HR</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="role">Role*</label>
                        <input type="text" id="role" v-model="role">
                    </div>
                    <div class="form-group">
                        <label for="firstname">Firstname*</label>
                        <input type="text" id="firstname" v-model="firstname">
                    </div>
                    <div class="form-group">
                        <label for="lastname">Lastname*</label>
                        <input type="text" id="lastname" v-model="lastname">
                    </div>
                    <div class="form-group">
                        <label for="shortname">Nickname*</label>
                        <input type="text" id="nickname" v-model="nickname">
                    </div>
                    <div class="form-group">
                        <label for="age">Age*</label>
                        <input type="number" id="age" v-model="age">
                    </div>
                    <div class="form-group">
                        <label for="gender">Gender*</label>
                        <select id="gender" v-model="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="nationality">Nationality*</label>
                        <input type="text" id="nationality" v-model="nationality">
                    </div>
                    <div class="form-group">
                        <label for="birthday">Birth Day*</label>
                        <input type="date" id="birthday" v-model="birthday">
                    </div>
                    <div class="form-group">
                        <label for="education">Education*</label>
                        <input type="text" id="education" v-model="education">
                        <label style="margin-top: 2%;" for="education1">Education(Optional)</label>
                        <input style="margin-top: 2%;" type="text" id="education2" v-model="education2">
                        <label style="margin-top: 2%;" for="education2">Education(Optional)</label>
                        <input style="margin-top: 2%;" type="text" id="education3" v-model="education3">
                    </div>
                    <div class="form-group">
                        <label for="email">Email*</label>
                        <input type="email" id="email" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone number*</label>
                        <input type="tel" id="phone" v-model="phone" required><br>
                        <span v-if="phone && phone.length !== 10" style="color: red;">Please enter 10 digits.</span>
                    </div>
                    <div class="form-group">
                        <label for="resume">Resume*</label>
                        <input type="file" id="resume" @change="handleResumeUpload">
                    </div>
                    <div class="form-group">
                        <label for="more">More about me</label>
                        <textarea id="more" v-model="moreAboutMe"></textarea>
                    </div>
                    <button type="button" @click="deleteFiles3()">Submit</button>
                    <!-- @click="submitForm()" -->
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
function clearStore() {
    localStorage.clear();
    const port = window.location.port
    window.location.href = `${process.env.VUE_APP_PROTOCAL}://${process.env.VUE_APP_HOST}:${port}/login`;
}
export default {
    data() {
        return {
            department: '',
            department_select: '',
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
                const _env = process.env;
                console.log(_env.VUE_APP_S3API);

                const filename = `${this.firstname}_${this.lastname}_${Date.now()}`;
                const url_api = await axios.get(`${_env.VUE_APP_S3API}` + filename);
                console.log(url_api.data);

                const upload = await axios.put(url_api.data.url, this.resume, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });

                const info = {
                    department: this.department_select,
                    role: this.role,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    nickname: this.nickname,
                    nationality: this.nationality,
                    age: this.age,
                    gender: this.gender,
                    birthday: this.birthday,
                    education: this.education,
                    education2: this.education2,
                    education3: this.education3,
                    email: this.email,
                    phone: this.phone,
                    resume_file: `${_env.VUE_APP_S3API}getfile/`+filename,
                    moreAboutMe: this.moreAboutMe
                };

                
                console.log("Upload:", upload.status);
                if (upload.status != 200) {
                    alert("ERROR FROM UPLOAD to s3");
                } else {
                    console.log(upload.status);

                    const record_applicant = await axios.post(`${_env.VUE_APP_PROTOCAL}://${_env.VUE_APP_HOST}:${_env.VUE_APP_PORT}/${_env.VUE_APP_API_PREFIX}/Applicant`,
                    info, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    });

                    if (record_applicant.status == 204){
                        console.log(200);
                    }else if (record_applicant.status == 401){
                        clearStore();
                    }else{
                        this.deleteFiles3();
                    }

                }


            } catch (error) {
                console.error('Error submitting form:', error);
            }
        },
        async deleteFiles3(){
            // const rul = 'https://71pv22u6vl.execute-api.ap-southeast-2.amazonaws.com/s3-test/test-s3-20392/test__1709909716821';
            const _env = process.env;
            const api = `${_env.VUE_APP_S3API}`+'test__1709909716821/delete';
            console.log(api);
            const del = await axios.get(api);
            console.log(del.data.status);
        }

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
