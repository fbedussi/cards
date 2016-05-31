[].forEach.call(document.querySelectorAll('[draggable="true"]'), function(el) {
    el.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData("text/html", '<p>pippo</p>')
        //e.dataTransfer.setData("text/plain", e.target.id);

        console.log('drag', e.target);
    });
});

document.addEventListener('dragover', function (e) {
                e.preventDefault();
            });

document.addEventListener('dragenter', function (e) {
                e.preventDefault();
            });

[].forEach.call(document.querySelectorAll('.column'), function(el) {
    el.addEventListener('drop', function(e) {
        console.log('drop', e);
        console.log(e.dataTransfer.getData("text"));
    });
});