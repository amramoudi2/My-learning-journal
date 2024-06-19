const viewMoreBtn = document.getElementById("view-more");
const moreBlogs = document.getElementsByClassName("b");

viewMoreBtn.addEventListener("click", () => {
    Array.from(moreBlogs).forEach(blog => {
        blog.style.display = 'block';
    });
    viewMoreBtn.style.display = 'none';
});
