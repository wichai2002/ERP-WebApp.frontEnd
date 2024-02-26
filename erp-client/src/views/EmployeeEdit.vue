<template>
    <div class="container-fluid">
        <div class="row">
            <!-- <SideBar /> -->
            <div class="col">
                <SideBar />
            </div>
            <div class="col-10 my-2 my-1">
                <div class="row">
                    <div class="col">
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">Edit</h1>
                        <hr style="color: aliceblue;">
                    </div>
                </div>
                <div class="row">
                    <!-- content here -->

                    <div class="col-11 bg-white py-4 mx-4">
                        <div class="row">

                            <!-- Employee Info -->
                            <div class="col-5 bg-white mx-4"
                                style="border: 1px solid black; text-align: center; height: 20rem;">
                                <div class="bg-white" style="position: absolute; top: 12%; width: 10%;">
                                    <h4>Employee Info</h4>
                                </div>
                                <div class="row" style="display: flex;">
                                    <div class="col-3 mx-1 py-5"
                                        style="justify-content: center; align-items: center; margin-top: 10%;">
                                        <img src="../assets/image 1.png" alt="">
                                        <input type="file" placeholder="uplaods" style="margin-top: 10px; font-size: 10px;">
                                    </div>
                                    <div class="col-8 py-4">
                                        <form action="" class="from1">
                                            <div class="row mb-3">
                                                <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Employee ID</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputEmail3">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Department</label>
                                                <div class="col-sm-8">
                                                    <select name="" id="" class="form-control my-1">
                                                        <option value="Male">FB</option>
                                                        <option value="Female">FOOD</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Roles</label>
                                                <div class="col-sm-8">
                                                    <select name="" id="" class="form-control my-1">
                                                        <option value="Male">Main</option>
                                                        <option value="Female">Tain</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                    style="width: 28%;">Phone number</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputPassword3">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Nationality</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputPassword3">
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>


                            <!-- Main info -->
                            <div class="col-5" style="border: 1px solid black; text-align: center;">
                                <div class="bg-white" style="position: absolute; top: 12%; width: 10%;">
                                    <h4>Main Info</h4>
                                </div>
                                <div class="row py-4">
                                    <div class="col-12 py-2">
                                        <form action="" class="from1">
                                            <div class="row mb-3">
                                                <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Fullname</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputEmail3">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Nickname</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputPassword3">
                                                </div>
                                            </div>
                                            <div style="display: flex;" class="col mx-4">
                                                <div class="row mb-3" style="margin-right: 10%;">
                                                    <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                        style="width: 28%;">Gender</label>
                                                    <div class="col-sm-8">
                                                        <select name="" id="" class="form-control">
                                                            <option value="Male">Male</option>
                                                            <option value="Female">Female</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row mb-3 mx-3">
                                                    <label for="inputPassword3" class="col-sm-2 col-form-label px-1"
                                                        style="width: 28%;">Birth Day</label>
                                                    <div class="col-sm-8">
                                                        <input type="date" class="form-control" id="inputPassword3">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                    style="width: 28%;">Email Personal</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputPassword3">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Address</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputPassword3">
                                                </div>
                                            </div>
                                            <div class="row mb-3">
                                                <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Nationality</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputPassword3">
                                                </div>
                                            </div>
                                            <div style="display: flex;" class="col mx-4">
                                                <div class="row mb-3 mx-1">
                                                    <label for="inputPassword3" class="col-sm-2 col-form-label px-1"
                                                        style="width: 28%; color: #2ECD99;">Start Date</label>
                                                    <div class="col-sm-8">
                                                        <input type="date" class="form-control" id="inputPassword3">
                                                    </div>
                                                </div>
                                                <div class="row mb-3 mx-4">
                                                    <label for="inputPassword3" class="col-sm-2 col-form-label px-1"
                                                        style="width: 28%; color: red;">Quit Date</label>
                                                    <div class="col-sm-8">
                                                        <input type="date" class="form-control" id="inputPassword3">
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="display: flex;" class="col mx-4 ">
                                                <div class="row mb-3 mx-1" style="margin-right: 10%;">
                                                    <label for="inputPassword3" class="col-sm-2 col-form-label px-1"
                                                        style="width: 28%; color: #2ECD99;">Time Start</label>
                                                    <div class="col-sm-8">
                                                        <input type="time" class="form-control" id="inputPassword3">
                                                    </div>
                                                </div>
                                                <div class="row mb-3 mx-4">
                                                    <label for="inputPassword3" class="col-sm-2 col-form-label"
                                                        style="width: 28%; color: red;">Time End</label>
                                                    <div class="col-sm-8">
                                                        <input type="time" class="form-control" id="inputPassword3">
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>

                            <!-- Other Info -->
                            <div class="col-10 mx-4 my-5" style="border: 1px solid black;">
                                <div class="bg-white" style="position: absolute; top: 70%; width: 10%; text-align: center;">
                                    <h4>Other Info</h4>
                                </div>
                                <div class="row">
                                    <div class="col-6 py-5">
                                        <form action="" class="from1">
                                            <div class="row mb-3">
                                                <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                    style="width: 25%;">Employee ID</label>
                                                <div class="col-sm-8">
                                                    <input type="text" class="form-control" id="inputEmail3">
                                                </div>
                                            </div>
                                            <div class="row" style="display: flex;">
                                                <div class="row mb-3 col-6">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                        style="width: 25%;">Married</label>
                                                    <div class="col-sm-8 my-2">
                                                        <input type="checkbox">
                                                    </div>
                                                </div>
                                                <div class="row mb-3 col-6">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                        style="width: 25%;">Children</label>
                                                    <div class="col-sm-8">
                                                        <input type="number" class="form-control" id="inputEmail3">
                                                    </div>
                                                </div>
                                                <div class="row mb-3 col-12">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                        style="width: 28%;">Children Description</label>
                                                    <div class="col-sm-8">
                                                        <input type="text" class="form-control" id="inputEmail3">
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-6">
                                        <div class="col-12 my-3">
                                            <form action="" class="from1">
                                                <div class="row mb-3 col-12">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                        style="width: 28%;">Banking</label>
                                                    <div class=" col-12 px-2 py-2">
                                                        <table class="tt">
                                                            <tr>
                                                                <th>Address Banking</th>
                                                                <th>Account Name</th>
                                                                <th>Account Number</th>
                                                                <th>Status</th>
                                                                <th>Note</th>
                                                            </tr>
                                                            <tr>
                                                                <td><input type="text"></td>
                                                                <td><input type="text"></td>
                                                                <td><input type="text"></td>
                                                                <td><input type="text"></td>
                                                                <td><input type="text"></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div class="col-12">
                                            <form action="" class="from1">
                                                <div class="row mb-3 col-12">
                                                    <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                        style="width: 28%;">Univesity</label>
                                                    <div class=" col-12 px-2 py-2">
                                                        <table class="tt">
                                                            <tr>
                                                                <th>Schools</th>
                                                                <th>Degree</th>
                                                                <th>Mode of study</th>
                                                                <th>Graduration Year</th>
                                                                <th>Description</th>
                                                            </tr>
                                                            <tr>
                                                                <td><input type="text"></td>
                                                                <td><input type="text"></td>
                                                                <td><input type="text"></td>
                                                                <td><input type="text"></td>
                                                                <td><input type="text"></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-5 mx-4" style="border: 1px solid black;">
                                <div class="bg-white"
                                    style="position: absolute; top: 109%; width: 10%; text-align: center;">
                                    <h4>Leave Day</h4>
                                </div>
                                <div class="col-12 py-5">
                                    <form action="" class="from1">
                                        <div class="row mb-3">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                style="width: 25%;">Sick leave</label>
                                            <div class="col-sm-8">
                                                <input type="text" class="form-control" id="inputEmail3">
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                style="width: 25%;">Personal leave</label>
                                            <div class="col-sm-8" style="display: flex;">
                                                <input type="text" class="form-control" id="inputEmail3">
                                                /30
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <label for="inputEmail3" class="col-sm-2 col-form-label"
                                                style="width: 25%;">Vacation leave</label>
                                            <div class="col-sm-8" style="display: flex;">
                                                <input type="text" class="form-control" id="inputEmail3">/30
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div class="col-12 my-4">
                               <div class="row" style="justify-content: center;">
                                    <div class="col-1"> <button class="btn btn-success" @click="summit_form()">SAVE</button></div>
                                    <div class="col-1"> <button class="btn btn-danger" @click="reject()">REJECT</button></div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../components/NavigationBar.vue';
export default {
    components: {
        SideBar
    },
    data(){
        return{

        }
    },
    methods: {
        summit_form(){

        },
        reject(){

}
    },
}
</script>

<style scoped>
.from1 input {
    height: 70%;

}

.from1 select {
    height: 70%;
    font-size: 12px;
}


.from1 label {
    font-size: 12px;


}

.tt tr,
td,
th {
    border: 1px solid black;
    text-align: center;
}

.tt input {
    height: 10px;
}

.tt td,
th {
    padding: 10px;
    font-size: 12px;
}
</style>