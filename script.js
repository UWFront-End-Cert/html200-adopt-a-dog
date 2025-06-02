let total = 0;

function showDogInfo(name, breed, fee) {
    alert(`Name: ${name}\nBreed: ${breed}\nAdoption Fee: $${fee}`);
}

function adoptDog(fee) {
    total += fee;
    alert(`Total Adoption Fee: $${total}`);
}
