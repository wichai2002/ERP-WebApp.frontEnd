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
                        <h1 class="text-align-center py-2 mx-2 " style="color: #2ECD99;">Add Training</h1>
                        <hr style="color: aliceblue;">
                    </div>
                </div>
                <div class="row">
                    <!-- content here -->
                    <div class="col p-4 justify-content-center d-flex ">
                        <div class="row bg-light p-2 w-75 align-items-center border border-dark">
                            <div class="col border border-dark">
                                <div class="py-3">
                                    <h3 class="text-center" style="font-weight: 800;">ADD NEW TRANING</h3>
                                </div>

                                <div class="row p-2">
                                    <div class="col mx-2">
                                        <label for="title input">Training Title
                                            <input type="text" class="input mx-3">
                                        </label>
                                    </div>
                                    <div class="col mx-2">
                                        <label for="date">Traning Date
                                            <input type="date" class="input mx-3">
                                        </label>
                                    </div>
                                </div>

                                <div class="row p-2 mt-2">
                                    <div class="col mx-2">
                                        <label for="time start">Time Start
                                            <input type="time" class="input mx-3">
                                        </label>
                                    </div>
                                    <div class="col mx-2">
                                        <label for="time end">Time End
                                            <input type="time" class="input mx-3">
                                        </label>
                                    </div>
                                </div>

                                <div class="row p-2 mt-2">
                                    <div class="col-6 d-flex mx-2">
                                        <label for="department">Department</label>

                                        <select class="form-select mx-4" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row p-2 my-2">
                                    <div class="col d-flex justify-content-center mx-4">
                                        <button class="btn btn-md btn-success">SAVE</button>
                                    </div>
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
}
</script>

<style scoped></style>