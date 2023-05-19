// let namaSiswa1 = "Yehezkiel";
// let namaSiswa2 = "Reynaldi";
// let namaSiswa3 = "Abraham";

// console.log(namaSiswa1);
// console.log(namaSiswa2);
// console.log(namaSiswa3);

// array
// let namaSiswa = ["Yehezkiel", "Reynaldi", "Abraham", "Test"];
// console.log(namaSiswa);
// console.log(namaSiswa[1]);

// object
// let dataPersonal1 = {
//     nama: "Yehezkiel",
//     alamat: "Bekasi Timur",
//     umur: 21
// };

// let dataPersonal2 = {
//     nama: "Ganjar Pranowo",
//     alamat: "Jawa Tengah",
//     umur: 50
// };

// let dataPersonal3 = {
//     nama: "Joko Widodo",
//     alamat: "Solo",
//     umur: 53
// };

// let dataPersonal4 = {
//     nama: "Megawati Soekarnoputri",
//     alamat: "Jakarta Selatan",
//     umur: 65
// };

// console.log(dataPersonal1);
// console.log(dataPersonal2);
// console.log(dataPersonal3);
// console.log(dataPersonal4);
// console.log(dataPersonal2.nama);

// array of object =
// let dataCaleg = [
//     { nama: "Joko Widodo", alamat: "Solo" },
//     { nama: "Puan Maharani", alamat: "Jakarta Selatan" },
//     { nama: "Prabowo Subianto", alamat: "Semarang" }
// ];
// console.log(dataCaleg);
// console.log(dataCaleg[1].nama);

let dataBlog = [];

function addBlog(event) {
    event.preventDefault();

    let title = document.getElementById("input-blog-title").value;
    let content = document.getElementById("input-blog-content").value;
    let image = document.getElementById("input-blog-image").files;

    // untuk membuat url gambar, agar tampil
    image = URL.createObjectURL(image[0]);
    console.log(image);

    let blog = {
        title,
        content,
        image,
        postAt: "19 May 2023",
        author: "Yehezkiel Reynaldi Abraham"
    };

    dataBlog.push(blog);
    console.log(dataBlog);

    renderBlog()
}

function renderBlog() {
    document.getElementById("contents").innerHTML = "";
    for (let index = 0; index < dataBlog.length; index++) {
        document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${dataBlog[index].image}" alt="blog_img" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-delete">Delete Post</button>
                </div>

                <h1>
                    <a href="blog-detail.html" target="_blank"
                    >${dataBlog[index].title}</a
                    >
                </h1>
                <div class="detail-blog-content">
                    ${dataBlog[index].postAt} | ${dataBlog[index].author}
                </div>
                <p>
                    ${dataBlog[index].content}
                </p>
            </div>
        </div>
        `;

    }
}