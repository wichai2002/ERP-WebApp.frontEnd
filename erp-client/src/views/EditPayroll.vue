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
                        <h1 class="text-align-center py-2 mx-2" style="color: #2ecd99">
                            EDIT PAYROLL
                        </h1>
                        <hr style="color: aliceblue" />
                    </div>
                </div>
                <div class="row">
                    <!-- content here -->

                    <div class="col-10 bg-white py-4 ms-5" style="border-radius: 10px; padding-left: 3%; padding-right: 3%;">
                        <div class="col-4 bg-white" style="position: absolute; top: 13%; width: 19%; left: 23%; text-align: center;">
                            <h3>EDIT PAYROLL PERSONAL</h3>
                        </div>

                        <div class="row g-3 align-items-center" style="border: 1px solid black; margin-top: 1%; padding-top: 3%; border-radius: 10px; padding-bottom: 3%;">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">Fullname</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="inputPassword6" class="form-control" />
                            </div>

                            <div class="col-auto" style="margin-left: 10%;">
                                <label for="inputPassword6" class="col-form-label">Employee id</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" id="inputPassword6" class="form-control" />
                            </div>

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Department</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="inputPassword6" class="form-control" />
                                </div>

                                <div class="col-auto" style="margin-left: 10%;">
                                    <label for="inputPassword6" class="col-form-label">Roles</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="inputPassword6" class="form-control" />
                                </div>
                            </div>

                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Salary base</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="inputPassword6" class="form-control" />
                                </div>
                            </div>
                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">DISCOUNT</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="inputPassword6" class="form-control" />
                                </div>
                                <div class="col-auto">
                                    <span id="passwordHelpInline" class="form-text">
                                    %
                                    </span>
                                </div>

                                <div class="col-auto" style="margin-left: 8%;">
                                    <label for="inputPassword6" class="col-form-label">MOUNT DISCOUNT</label>
                                </div>
                                <div class="col-auto">
                                    <input type="date" id="inputPassword6" class="form-control" />
                                </div>
                            </div>
                            <div class="row g-3 align-items-center">
                                <div class="col-auto">
                                    <label for="inputPassword6" class="col-form-label">Bonus</label>
                                </div>
                                <div class="col-auto">
                                    <input type="text" id="inputPassword6" class="form-control" />
                                </div>
                                <div class="col-auto">
                                    <span id="passwordHelpInline" class="form-text">
                                    % per year
                                    </span>
                                </div>
                                <div class="col-auto" style="margin-left: 40%;">
                                   <button class="btn btn-success">SAVE</button>
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
import SideBar from "../components/NavigationBar.vue";
export default {
    components: {
        SideBar,
    },
};
</script>

<style scoped></style>