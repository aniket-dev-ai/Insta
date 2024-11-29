const users = [
  {
    id: 1,
    username: "Priya Sharma",
    profilePic:
      "https://images.unsplash.com/photo-1517630800677-932d836ab680?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Profile picture URL
    postPic:
      "https://plus.unsplash.com/premium_photo-1681493353999-a3eea8b95e1d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Post picture URL
    likeCount: 1024,
    commentCount: 215,
    caption: "Life is beautiful 🌸",
    isLike: false,
    location: { area: "Connaught Place", city: "New Delhi", state: "Delhi" },
    uploadedTimeAgo: "2 hours ago",
    shareCount: 50,
  },
  {
    username: "Anjali Verma",
    profilePic:
      "https://images.unsplash.com/photo-1693074446544-5fdd65a18cbd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postPic:
      "https://plus.unsplash.com/premium_photo-1668399857567-4ce8cf6ed3c4?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likeCount: 870,
    commentCount: 150,
    caption: "Sunshine mixed with a little bit of attitude ☀️",
    isLike: false,
    location: { area: "Marine Drive", city: "Mumbai", state: "Maharashtra" },
    uploadedTimeAgo: "5 hours ago",
    shareCount: 30,
  },
  {
    username: "Kajal Mehta",
    profilePic:
      "https://images.unsplash.com/photo-1603922380386-9b476749ac3f?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postPic:
      "https://images.unsplash.com/photo-1621009480939-898de3a7d5bc?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likeCount: 540,
    commentCount: 89,
    caption: "Chasing dreams 💫",
    isLike: false,
    location: { area: "MG Road", city: "Bengaluru", state: "Karnataka" },
    uploadedTimeAgo: "1 day ago",
    shareCount: 20,
  },
  {
    username: "Riya Gupta",
    profilePic:
      "https://images.unsplash.com/photo-1729838734093-02c250060abc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdvbWVuJTIwYmVhdXRpZnVsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    postPic:
      "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=2554&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likeCount: 730,
    commentCount: 112,
    caption: "Simplicity is the ultimate sophistication ✨",
    isLike: false,
    location: { area: "Salt Lake", city: "Kolkata", state: "West Bengal" },
    uploadedTimeAgo: "3 hours ago",
    shareCount: 40,
  },
  {
    username: "Naina Singh",
    profilePic:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postPic:
      "https://images.unsplash.com/photo-1727934404036-58e5b557288e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likeCount: 650,
    commentCount: 105,
    caption: "Happiness blooms from within 🌺",
    isLike: false,
    location: { area: "Sector 17", city: "Chandigarh", state: "Chandigarh" },
    uploadedTimeAgo: "6 hours ago",
    shareCount: 25,
  },
  {
    username: "Priya Sharma",
    profilePic:
      "https://images.unsplash.com/photo-1517630800677-932d836ab680?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Profile picture URL
    postPic:
      "https://plus.unsplash.com/premium_photo-1681493353999-a3eea8b95e1d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Post picture URL
    likeCount: 1024,
    commentCount: 215,
    caption: "Life is beautiful 🌸",
    isLike: false,
    location: { area: "Connaught Place", city: "New Delhi", state: "Delhi" },
    uploadedTimeAgo: "2 hours ago",
    shareCount: 50,
  },
  {
    username: "Anjali Verma",
    profilePic:
      "https://images.unsplash.com/photo-1693074446544-5fdd65a18cbd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postPic:
      "https://plus.unsplash.com/premium_photo-1668399857567-4ce8cf6ed3c4?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likeCount: 870,
    commentCount: 150,
    caption: "Sunshine mixed with a little bit of attitude ☀️",
    isLike: false,
    location: { area: "Marine Drive", city: "Mumbai", state: "Maharashtra" },
    uploadedTimeAgo: "5 hours ago",
    shareCount: 30,
  },
  {
    username: "Kajal Mehta",
    profilePic:
      "https://images.unsplash.com/photo-1603922380386-9b476749ac3f?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postPic:
      "https://images.unsplash.com/photo-1621009480939-898de3a7d5bc?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likeCount: 540,
    commentCount: 89,
    caption: "Chasing dreams 💫",
    isLike: false,
    location: { area: "MG Road", city: "Bengaluru", state: "Karnataka" },
    uploadedTimeAgo: "1 day ago",
    shareCount: 20,
  },
  {
    username: "Riya Gupta",
    profilePic:
      "https://images.unsplash.com/photo-1729838734093-02c250060abc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdvbWVuJTIwYmVhdXRpZnVsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
    postPic:
      "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=2554&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likeCount: 730,
    commentCount: 112,
    caption: "Simplicity is the ultimate sophistication ✨",
    isLike: false,
    location: { area: "Salt Lake", city: "Kolkata", state: "West Bengal" },
    uploadedTimeAgo: "3 hours ago",
    shareCount: 40,
  },
  {
    username: "Naina Singh",
    profilePic:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postPic:
      "https://images.unsplash.com/photo-1727934404036-58e5b557288e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likeCount: 650,
    commentCount: 105,
    caption: "Happiness blooms from within 🌺",
    isLike: false,
    location: { area: "Sector 17", city: "Chandigarh", state: "Chandigarh" },
    uploadedTimeAgo: "6 hours ago",
    shareCount: 25,
  },
];

let stry = document.querySelector(".stories");

let str = "";

users.forEach((elem , indx) => {
  str += ` <div onclick="show(${indx})" class="story">
          <img  src="${elem.profilePic}" alt="">
          <h5>${elem.username}</h5>
        </div>`;
});

stry.innerHTML = str;

let abb = "";

function renderPosts() {
  let abb = "";
  users.forEach((elem, indx) => {
    abb += `<div class="post">
            <div class="first">
              <div class="left">
                <div class="image">
                  <img
                    src="${elem.profilePic}"
                    alt=""
                  />
                </div>
                <div class="name">
                  <h4>${elem.username}</h4>
                  <h5>${elem.location.area} , ${elem.location.city} , ${
      elem.location.state
    }</h5>
                </div>
              </div>
              <div class="right">
                <img src="https://img.icons8.com/?size=100&id=102729&format=png&color=000000" alt="" />
              </div>
            </div>
            <div class="picture">
              <img ondblclick="heartlarge(${indx})"
                src="${elem.postPic}"
                alt=""
              />
              <div class="hearticon" id="hearticon-${indx}">
                <img src="https://img.icons8.com/?size=100&id=G3rOvlDYR75Z&format=png&color=000000" alt="heart icon">
              </div>
            </div>
            <div class="third">
              <div class="lefy">
                <div class="fis" onclick="togglelike(${indx})">
                  ${
                    elem.isLike
                      ? `<img
                      src="https://img.icons8.com/?size=100&id=7697&format=png&color=CE6754"
                      alt="liked"
                    />`
                      : `<img
                      src="https://img.icons8.com/?size=100&id=87&format=png&color=000000"
                      alt="not liked"
                    />`
                  }
                  <h6>${elem.likeCount}</h6>
                </div>
                <div class="sec">
                  <img
                    src="https://img.icons8.com/?size=100&id=rtUz83G8M7Nh&format=png&color=000000"
                    alt=""
                  />
                  <h6>${elem.commentCount}</h6>
                </div>
                <div class="thir">
                  <img
                    src="https://img.icons8.com/?size=100&id=97424&format=png&color=000000"
                    alt=""
                  />
                  <h6>${elem.shareCount}</h6>
                </div>
              </div>
              <div class="right">
                <img src="https://img.icons8.com/?size=100&id=82461&format=png&color=000000" alt="" />
              </div>
            </div>
            <div class="lasty"> 
              <h3><b>${elem.username} : </b> <span>${elem.caption}</span></h3>
              <h4>View all ${elem.commentCount} comments</h4>
              <h5>${elem.uploadedTimeAgo}</h5>
            </div>
          </div>`;
  });
  document.querySelector(".posts").innerHTML = abb;
}

renderPosts();

function togglelike(indxx) {
  const user = users[indxx];
  user.isLike = !user.isLike;
  user.likeCount += user.isLike ? 1 : -1;
  renderPosts();
}

function heartlarge(indxx) {
  const user = users[indxx];
  if (!user.isLike) {
    user.isLike = true;
    user.likeCount += 1;
    renderPosts();
  }
  const heartIcon = document
    .getElementById(`hearticon-${indxx}`)
    .querySelector("img");

  heartIcon.style.transform = "scale(2)";
  heartIcon.style.opacity = "1";

  setTimeout(() => {
    heartIcon.style.opacity = "0";
  }, 600);

  setTimeout(() => {
    heartIcon.style.transform = "scale(0)";
  }, 900);
}

let strr = document.querySelector(".storry")
let strrim = document.querySelector(".storry img")

function show(indx){
strrim.src = users[indx].postPic
strr.style.display = "flex"
strr.style.transform= "scale(1)";
}
function hide(){
  // strrim.src = users[indx].postPic
  strr.style.display = "none"
  strr.style.transform= "scale(0)";
}