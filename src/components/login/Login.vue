<template>
    <section class="container">
        <br />
        <div class="logo">alaahza</div>

        <br /><br />
        <section class="field-container">
            <br />
            <form action="">
                <section class="field-sub-container">
                    <section class="field">
                        <input type="email" placeholder="Email">
                    </section>
                    <br />
                    <section class="field">
                        <input type="password" placeholder="Password">
                    </section>
                    <br />
                    <div class="text">Forget password ?</div>

                    <br /><br /><br />
                    <div class="button">Login</div>
                    <br />
                </section>
                
            </form>
        </section>

        <br /><br />
        <div class="polygone1"></div>
        <div class="polygone2"></div>

        <br /><br /><br /><br /><br /><br /><br /><br />
        <section class="field-container" style="background-color:#050c1b;box-shadow:none"> 
            <br />
            <section class="footer">
                <div class="text">Not have an account ? </div>
                <div class="button">Signin</div>
            </section>
            
        </section>
    </section>
    
</template>

<script>

export default{
    name : 'LogiN'
}

</script>

<style scoped>

.container{
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #050c1b;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow: scroll;
}

.logo{
    text-align: center;
    font-size: 2em;
    color: white;
    font-weight: bold;
}

.field-container{
    background-color: #1d2432;
    padding: 10px;
    width: 50%;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.field-sub-container{
    width: 80%;
    margin: auto;
}

.field{
    display: flex;
    align-items: center;
    padding: 5px;
    border-bottom: 3px solid #7A2BCF;
    
}

.field input{
    border: none;
    background-color: #1d2432;
    font-family: inherit;
    font-size: 1.1em;
    padding: 5px;
    width: 100%;
    color: white;
}

.text{
    color: white;
}

.field-sub-container .text{
    text-align: right;
    font-size: 1.1em;
}

.button{
    text-align: center;
    padding: 10px;
    background-color: #7A2BCF;
    border-radius: 4px;
    color: white;
    font-size: 1.1em;
    font-weight: bold;
    cursor: pointer;
}

.footer{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
}

.footer .button{
    margin-left: 7px;
}

.polygone1{
    width: 0;
    height: 0;
    border-left: 60px solid transparent;
    border-right: 60px solid transparent;
    border-bottom: 100px solid rgba(201, 182, 220, 0.80);
    border-radius: 5px;
    transform: rotate(90deg);
    position: absolute;
    left: 0;
    z-index: 10;
}

.polygone2{
    width: 0;
    height: 0;
    border-left: 80px solid transparent;
    border-right: 80px solid transparent;
    border-bottom: 120px solid #7A2BCF;
    border-radius: 5px;
    transform: rotate(90deg);
    position: absolute;
    left: -10px;
    margin-top: 45px;
    z-index: 5;;
}
/* Style pour le mobile */

@media screen and (max-width: 768px){
    .field-container{
        width: 85%;
    }

    .field-sub-container{
        width: 100%;
    }
    
    .button{
        font-size: 0.9em;
    }

    .footer{
        justify-content: center;
    }

    .text{
        font-size: 0.9em;
    }
    .field-sub-container .text{
        font-size: 0.9;
    }
}
</style>