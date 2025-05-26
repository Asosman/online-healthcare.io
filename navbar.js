function navbar() {
    return `
    <div id="navbartop1">
        <div id="navleft1">
            <div> <a href= "index.html"><img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt=""></a></div>
            <div>
                <h4>MEDICINES</h4>
            </div>
            <div>
                <h4>LAB TESTS</h4>
            </div>
            <div>
                <h4>CONSULT DOCTORS</h4>
            </div>
            <div>
                <h4>COVID-19</h4>
            </div>
            <div>
                <h4>AYURVEDA</h4>
            </div>
            <div>
                <h4>CARE PLAN</h4>
            </div>
        </div>
        

        <div id="navright1">
            <div>
                <a class ="userlogo" href="login.html"><h5 id="userlog">Login | Sign Up</h5></a>
                <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" alt="" id="userimg">
            </div>
            <div>
                <h5>Offers</h5>
            </div>
            <div>
                <a href="cart.html">
                    <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/009/157/893/small/shopping-cart-set-of-shopping-cart-icon-on-white-background-shopping-cart-icon-shopping-cart-design-shopping-cart-icon-sign-shopping-cart-icon-isolated-shopping-cart-symbol-free-vector.jpg"
                    alt="">
                </a>
            </div>
            <div>
                <h5>Need Help? 
                    
                </h5>
                
            </div>
        </div>
    </div>
    <div id="inputnav1">
        <div id="inputnavright1">
            <div>
               <select name="city" id="city">
  <option value="">--Select State--</option>
  <option value="Abia">Abia</option>
  <option value="Adamawa">Adamawa</option>
  <option value="Akwa Ibom">Akwa Ibom</option>
  <option value="Anambra">Anambra</option>
  <option value="Bauchi">Bauchi</option>
  <option value="Bayelsa">Bayelsa</option>
  <option value="Benue">Benue</option>
  <option value="Borno">Borno</option>
  <option value="Cross River">Cross River</option>
  <option value="Delta">Delta</option>
  <option value="Ebonyi">Ebonyi</option>
  <option value="Edo">Edo</option>
  <option value="Ekiti">Ekiti</option>
  <option value="Enugu">Enugu</option>
  <option value="FCT">FCT</option>
  <option value="Gombe">Gombe</option>
  <option value="Imo">Imo</option>
  <option value="Jigawa">Jigawa</option>
  <option value="Kaduna">Kaduna</option>
  <option value="Kano">Kano</option>
  <option value="Katsina">Katsina</option>
  <option value="Kebbi">Kebbi</option>
  <option value="Kogi">Kogi</option>
  <option value="Kwara">Kwara</option>
  <option value="Lagos">Lagos</option>
  <option value="Nasarawa">Nasarawa</option>
  <option value="Niger">Niger</option>
  <option value="Ogun">Ogun</option>
  <option value="Ondo">Ondo</option>
  <option value="Osun">Osun</option>
  <option value="Oyo">Oyo</option>
  <option value="Plateau">Plateau</option>
  <option value="Rivers">Rivers</option>
  <option value="Sokoto">Sokoto</option>
  <option value="Taraba">Taraba</option>
  <option value="Yobe">Yobe</option>
  <option value="Zamfara">Zamfara</option>
</select>
            </div>
            <div>
               
                <input type="text" id="searchnav" placeholder="Search for Medicines and Health Products">
                <div id="suggestion1"></div>
            </div>
        </div>
        <div id="inputnavleft1">
            <div>
                <p>⚡ QUICK BUY! Get 15% off on medicines*</p>
            </div>
            <div>
                <button>Quick order</button>
            </div>
        </div>
    </div>
    `;
  }
  export  {navbar};