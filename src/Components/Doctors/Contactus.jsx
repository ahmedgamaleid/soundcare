import React from 'react';
import contactlogo from '../../img/istockphoto-1034426836-612x612.jpg'; // Adjust the path to your image file

const Contactus = () => {
  return (
    <div className='contactus container rounded-4'>
      <div className="outer-container w-100 mt-5 rounded-4">
        <div className="overlay p-5 rounded-4">
          <div className="row g-4 ">
            <div className="col-lg-6 ">
              
            <div className="form-container ">
          
  <form className="formss mb-1 rounded-4 p-4 ">
    
  
  <div className="mb-3 row ">
                  <div className="col-sm-6  ">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" id="firstName" className="form-control" placeholder="First Name" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" id="lastName" className="form-control" placeholder="Last Name" />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-sm-6">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" id="phone" className="form-control" placeholder="Phone" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control" placeholder="Email" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">Date of Birth</label>
                  <input type="date" id="dob" className="form-control" placeholder="Date of Birth" />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea id="address" className="form-control" rows="3" placeholder="Address"></textarea>
                </div>
                <button type="submit" className="btn fontb rounded-5  py-2">Submit</button>
  </form>
</div>

            
            </div>
            <div className="col-lg-6 p-4 contact22">
            <div className='contact22h2'><p>ready to become our member</p>
  <h2>we assure cuxtomer <br></br>
  satisfaction with personal<br></br>
  care</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur similique id temporibus assumenda rerum aliquam animi quae maiores veritatis ipsa.</p></div>
           <button className=' conntac btn rounded-5 fontb px-4'> discover more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
