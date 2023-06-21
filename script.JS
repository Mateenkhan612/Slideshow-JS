
    var myimages = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.jpg']
    var currentImage = 0;

    document.getElementById('next').onclick = nextPhoto;

    function nextPhoto() {
        currentImage++;
        if (currentImage > 4) { currentImage = 0 }
        document.getElementById('myimage').src = myimages[currentImage];
    }

    document.getElementById('previous').onclick = previous;

    function previous() {
        currentImage--;
        if (currentImage < 0) { currentImage = 4 }
        document.getElementById('myimage').src = myimages[currentImage];
    };

        // var currentImage = 0;
        // var myphotos = ['img1.jpg, img2.jpg, img3.jpg, img4.jpg, img5.jpg'];
        // var container = document.getElementById('content');
        // var nextbtn = document.getElementById('next');
        // var prevbtn = document.getElementById('previous');

        // nextbtn.addEventListener('click', function(event)){
        //     event.preventDefault();

        //     currentImage++;
        //     if (currentImage > myphotos.length-1){currentImage = 0;}
        
        
        // var newSlide document.createElement('img');
        // newSlide.src = 'images/${myimage[currentImage]}';
        // newSlide.className = 'images';
        // container.appendChild(newSlide);
        // };
    
