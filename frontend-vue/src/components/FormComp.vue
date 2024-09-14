<template>
    <div >
        <form id="myForm" action="https://submit-form.com/FBtdQasKq" method="POST" novalidate style="border-radius: 10%; padding: 1%; margin-top: 2%;">
                        <div class="p-3 m-5 bd-example m-5 mt-0 border-5">
                            <div class="mb-3" style="width: 100%; margin-top: 3%;">
                                <h3 for="name" class="form-label" id="fCon" style="color: white; position: absolute; font-size: medium; margin-left: 1%; " >Name</h3>
                                <br>
                                <input type="text" id="name" name="name" required="`${formVal()}`" style="margin-top: 3%;">
                            </div>
                            <div class="mb-3" style="width: 100%;">
                                <h3 for="email" class="form-label" id="fCon1" style="color: white; position: absolute; font-size: medium; margin-left: 1%; ">Email address</h3>
                                <input type="email" id="email" name="email" placeholder="name@example.com" required="`${formVal()}`" style="margin-top: 15%;">
                            </div>
                            <div class="mb-3" style="width: 100%;">
                                <label for="feedback" class="form-label" id="fCon2" style="color: white; position: absolute; font-size: medium; margin-left: 0%;">Message</label>
                                <textarea id="feedback" name="feedback" rows="3" required="`${formVal()}`" style="margin-top: 15%;"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-danger" @click='formVal' >Submit</button>
                            <button type="reset" class="btn" style="color: white;">Clear</button>
                        </div>
                    </form>
    </div>
</template>
<script>
export default {
    methods: {
        formVal(event) {
            event.preventDefault(); 
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let feedback = document.getElementById('feedback').value;

            if (!/^[a-zA-Z ]+$/.test(name)) {
                alert('Please enter a valid name');
                return false;
            }

            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                alert('Please enter a valid email');
                return false;
            }

            if (feedback.length < 1) {
                alert('Please provide feedback');
                return false;
            }

            document.getElementById('myForm').submit();
        }
    }
}
</script>
<style>
    #myForm{
        background-color: #AAC4E7;
        width: 360px;
        height: fit-content;
        margin-bottom: 10%;
        margin-top: 5%;
        
    }
    @media (max-width: 300px) {
    #myForm {
      padding: 5% !important;
      width: fit-content !important;
      height: 415px !important;
    }

    .p-3 {
      padding: 1rem !important; 
    }

    .mb-3 {
      margin-bottom: 5% !important; 
    }

    .form-label {
      font-size: small !important; 
      position: relative !important; 
      margin-left: 0 !important;
    }

    input,
    textarea {
      width: 100% !important;
      margin-top: 1% !important; 
    }

    button {
      width: 100% !important; 
      margin-top: 1rem !important;
    }
  }
</style>