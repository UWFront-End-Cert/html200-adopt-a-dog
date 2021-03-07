  const el = document.getElementById("contact-button")

  el.addEventListener("click", function (event) {
      event.preventDefault();

      const result = 'Thank you. The form information has been received.'
      alert(result);

      const formdata = document.getElementById('orderForm').elements;
      console.log(formdata)

      for (let i = 0; i < formdata.length - 1; i++) {

          const id = document.getElementById('orderForm').elements[i].id;
          const val = document.getElementById('orderForm').elements[i].value;

          //   console.log("ID: ", id);
          //   console.log("Value: ", val);
          const submitdata = ("ID: " + id + " " + "Value: " + val);
          console.log(submitdata);

      }

  });