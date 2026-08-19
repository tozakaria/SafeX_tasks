


const checkboxes =
   document.querySelectorAll(".service-checkbox");

checkboxes.forEach(checkbox => {
   checkbox.addEventListener("change", () => {
      const card =
      checkbox.closest(".service-card");

         if (checkbox.checked) {
            card.classList.add("selected");
         }
         else {
            card.classList.remove("selected");
         }
      
      let total = 0;
      checkboxes.forEach(item => {
         if (item.checked) {
            total = total + Number(item.value);
         }
      });
      const totalPrice =
      document.getElementById("total-price");
      totalPrice.textContent = `Total Price: ${total.toLocaleString()} PKR`;
   });
});

