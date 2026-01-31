

function initializeNavbar() {
    console.log("Navbar initialized.");

    function changing() {
        document.getElementById("logi").style.display = 'block';
    }

    document.getElementsByClassName("btn")[0].addEventListener('click', function () {
        close1();
        changing();
    });

    document.getElementById("anchorlog").addEventListener('click', function () {
        close1();
        changing();
    });

    function close() {
        document.getElementById("logi").style.display = 'none';
    }

    document.getElementsByClassName("btn-close2")[0].addEventListener('click', function () {
        close();
    });

    function changing1() {
        document.getElementById("sini").style.display = 'block';
    }

    document.getElementsByClassName("btn1")[0].addEventListener('click', function () {
        close();
        changing1();
    });

    document.getElementById("anchorsign").addEventListener('click', function (event) {
        close();
        changing1();
    });

    document.getElementById("anchorpers").addEventListener('click', function (event) {
        close2();
        changing1();
    });

    function close1() {
        document.getElementById("sini").style.display = 'none';
    }

    document.getElementsByClassName("btn-close1")[0].addEventListener('click', function () {
        close1();
    });

    function change4() {
        document.getElementById("busi").style.display = 'block';
    }

    document.getElementById("sinbus").addEventListener('click', function () {
        close1();
        change4();
    });

    function close2() {
        document.getElementById("busi").style.display = 'none';
    }

    document.getElementsByClassName("btn-close3")[0].addEventListener('click', function () {
        close2();
    });

    function showdrop() {
        document.getElementsByClassName("dropdown")[0].style.display = "block";
    }

    document.getElementsByClassName("navbutt")[0].addEventListener('click', function () {
        showdrop();
    });

    function showdrop2() {
        document.getElementsByClassName("dropdown0")[0].style.display = "block";
    }

    document.getElementsByClassName("arrow")[0].addEventListener('click', function () {
        showdrop2();
    });

    function chngeright1() {
        const element = document.getElementsByClassName("anchora")[0];
        element.style.color = "white";
    }

    function chngerightback() {
        const element = document.getElementsByClassName("right1")[0];
        element.style.backgroundColor = "black";
    }

    document.getElementsByClassName("right2")[0].addEventListener('click', function () {
        chngeright2();
        chngeright2back();
    });

    function chngeright2() {
        const element = document.getElementsByClassName("anchorb")[0];
        element.style.color = "white";
    }

    function chngeright2back() {
        const element = document.getElementsByClassName("right2")[0];
        element.style.backgroundColor = "black";
    }

    document.getElementsByClassName("right1")[0].addEventListener('click', function () {
        chngeright1();
        chngerightback();
    });
}
