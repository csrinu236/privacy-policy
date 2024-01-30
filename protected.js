fetch("http://localhost:5000/api/v1/users/showMe", {
  method: "GET",
  credentials: "include",
})
  .then((res) => {
    if (!res.ok) {
      window.location.href = "http://localhost:5500/";
    }
    return res.json();
  })
  .then((data) => {
    document.querySelector(".name").innerHTML = "Hi " + data.user.name;
    console.log(data);
  });
