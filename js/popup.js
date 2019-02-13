$('#open-popup').magnificPopup({
    items: [
        {
            src: "https://www.youtube.com/embed/QppXwgg7nC8",
            type: 'iframe' // this overrides default type
        }
    ],
    gallery: {
        enabled: true
    },
    type: 'image' // this is a default type
});