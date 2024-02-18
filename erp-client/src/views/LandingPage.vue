<template>
    <div class="container01">
        <div class="row" style="padding: 6%;">
            <div class="block01  col-md-12 col-sm-6">
                <h1 class="text01" style="color: aliceblue;">Yinnaxs Hotel</h1>
                <p class="text02" style="color: aliceblue;">Welcome to Yinnaxs Hotel, a luxurious retreat nestled in the
                    heart of [City or Location]. Our hotel combines modern elegance with a warm and inviting atmosphere,
                    offering guests a truly memorable experience. Whether you're here for business or leisure, our dedicated
                    staff is committed to ensuring your stay is both comfortable and enjoyable.</p>
                <div class="text-center p-3">
                    <button class="btn  mt-5" style=" background-color: #000000; color: aliceblue;">
                        <router-link to="FormPage" class="nav-link">Apply</router-link></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}

</script>

<style scoped>
.container01 {
    display: flex;
    justify-content: center;
    background-image: url("../assets/hotel.jpg");
    background-size: cover;
    background-position: center;
    height: 98.4vh;

    background-attachment: fixed;

}

.row {
    display: flex;
    justify-content: center;
}

.block01 {
    padding: 20px;
    border-radius: 10px;
}

.text01 {
    font-weight: 700;
    font-size: 7vw;
    line-height: 1;
    text-align: center;
    margin-bottom: 20px;
}

.text02 {
    font-size: 2vw;
    text-align: center;
    color: aliceblue;
}

.btn {
    width: 10vw;
    height: 7vh;
    justify-content: center;
    align-items: center;
    font-size: 2vw;
    color: aliceblue;
}</style>
