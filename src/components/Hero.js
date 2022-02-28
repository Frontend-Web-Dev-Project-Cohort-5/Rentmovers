const Hero = () => {
  return (
    <div className="row hero11 bg-secondary container-fluid">
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="row mt-4 ms-4">
          {/* <div className="col">

            </div> */}
          <h1 className="text-light">EASY WAY TO FIND A PERFECT PROPERTY</h1>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
            ratione?
          </p>
        </div>
      </div>

      <div class="row g-1 pb-3">
        {/* <div class="col-md">
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com"></input>
      <label for="floatingInputGrid">Email address</label>
    </div>
  </div> */}
        <div class="col-md">
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
            >
              <option selected>select your city</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label for="floatingSelectGrid">Location</label>
          </div>
        </div>

        <div class="col-md">
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
            >
              <option selected>choose property type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label for="floatingSelectGrid">Property type</label>
          </div>
        </div>

        <div class="col-md">
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
            >
              <option selected>choose price range</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label for="floatingSelectGrid">Price range</label>
          </div>

          {/* <div className="col-md"><h1>B</h1></div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
